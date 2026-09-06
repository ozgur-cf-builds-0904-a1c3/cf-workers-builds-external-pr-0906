export default {
  async fetch() {
    return new Response("owned-external-pr-baseline-v1", {
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  },
};

