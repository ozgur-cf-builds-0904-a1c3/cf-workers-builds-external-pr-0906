export default {
  async fetch() {
    return new Response("owned-external-pr-user-pr1-0906", {
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  },
};

