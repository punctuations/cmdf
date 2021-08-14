// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: "/api/upload",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'",
          },
        ],
      },
      {
        source: "/api/read",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'",
          },
        ],
      },
    ];
  },
};
