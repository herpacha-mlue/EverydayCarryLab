
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("contactInfo", function() {
    return `<div class="contact-info">Author: [Pacha Her] | Contact: [her.pacha@mse.edu]</div>`;
  });

  return {
    dir: {
      input: "./",
      output: "_site"
    }
  };
};
