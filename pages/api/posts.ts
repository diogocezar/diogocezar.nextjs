import { cors } from "@/helpers/utils";
import configs from "@/configs/index";

async function posts(req, res) {
  await cors(req, res);
  const { page = 1, slug = null } = req.query;
  let op = null;
  let value = null;
  if (slug) {
    op = "slug";
    value = slug;
  } else {
    op = "page";
    value = page;
  }
  const url = `${configs.ApiBaseBlog.url}?${op}=${value}`;
  const posts = await fetch(url);
  const total = parseInt(posts.headers.get("x-wp-total"), 10);
  const totalPages = parseInt(posts.headers.get("x-wp-totalpages"), 10);
  const postsJson = await posts.json();
  res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");
  res.json({
    date: new Date().toUTCString(),
    posts: postsJson,
    total: total,
    totalPages: totalPages,
  });
}

export default posts;
