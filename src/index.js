export default {
  async fetch(request, env) {
    const value = env.CF02_FU4_PREVIEW_SECRET;
    if (value === undefined) return new Response("SECRET_ABSENT");
    const bytes = new TextEncoder().encode(value);
    const digest = await crypto.subtle.digest("SHA-256", bytes);
    const hex = [...new Uint8Array(digest)].map(x => x.toString(16).padStart(2, "0")).join("");
    return new Response("SECRET_PRESENT:" + hex);
  },
};
