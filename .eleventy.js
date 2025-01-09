import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";

export default function(eleventyConfig) {
  // Passthrough files
  eleventyConfig.addPassthroughCopy("src/resources/css/");
  eleventyConfig.addPassthroughCopy("src/resources/js");
  eleventyConfig.addPassthroughCopy("src/resources/images");
  eleventyConfig.addPassthroughCopy("src/blog/");

  // Watch for changes
  eleventyConfig.addWatchTarget("src/resources/css/");
  eleventyConfig.addWatchTarget("src/resources/js");
  eleventyConfig.addWatchTarget("src/resources/images");
 

  eleventyConfig.addFilter("jsonify", function (value) {
    return JSON.stringify(value);
  });
  
  // Configure Markdown-It with plugins
  const markdownLib = markdownIt({
    html: true, // Enable HTML in Markdown
    breaks: true, // Convert newlines to <br>
    linkify: true, // Auto-convert URLs to links
  }).use(markdownItAttrs); // Add the attrs plugin

  // Set the Markdown library to use for processing
  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addCollection("testimonials", (collection) => {
    return collection.getFilteredByGlob("./src/testimonials/*.md");
  });

  // blogs collection
  eleventyConfig.addCollection("blogs", function (collectionApi) {
    const blogs = collectionApi.getFilteredByGlob("./src/blog/*.md"); // Path to your blog posts

    // Add navigation metadata
    blogs.forEach((blog, index) => {
      blog.data.previous = blogs[index - 1] || null;
      blog.data.next = blogs[index + 1] || null;
    });

    return blogs.reverse(); // Return blogs in descending order
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
}