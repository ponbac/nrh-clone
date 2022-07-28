const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query = "", { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    query PostSlugs {
      pages(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.pages;
}

export async function getPost(slug) {
  const data = await fetchAPI(
    `
    query PostBySlug {
      page(id: "${slug}", idType: URI) {
        title
        content
      }
    }
    `
  );

  const page = {
    title: data?.page?.title ?? "",
    content: data?.page?.content ?? "",
  };

  return page;
}
