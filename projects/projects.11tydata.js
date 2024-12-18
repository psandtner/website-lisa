export default function() {
	return {
		eleventyComputed: {
      permalink(data) {
        // If the page is in `draft:true` mode, don't write it to disk...
        if (data.draft) {
          return false;
        }
        // Return the original value (which could be `false`, or a custom value,
        // or default empty string).
        return data.permalink;
      },
      eleventyExcludeFromCollections(data) {
        // If the page is in `draft:true` mode, or has `permalink:false` exclude
        // it from any collections since it shouldn't be visible anywhere.
        if (data.draft || data.permalink === false) {
          return true;
        }
        if (!Array.isArray(data['images'])) {
          return true;
        }
        if (data.images.length == 0) {
          return true;
        }
        return data.eleventyExcludeFromCollections;
      },
    },
    layout: "layouts/project.njk",
    // Set a default position for all projects
    position: 999,
    tags: [
      "project"
    ],
	}
}