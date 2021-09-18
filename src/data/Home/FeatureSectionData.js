import simpleBookmarking from "../../assets/images/illustration-features-tab-1.svg";
import speedySearching from "../../assets/images/illustration-features-tab-2.svg";
import easySharing from "../../assets/images/illustration-features-tab-3.svg";

export const featureData = {
  header: "Features",
  subHeader:
    "Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.",
  featureTitles: ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"],
  featureContent: [
    {
      image: simpleBookmarking,
      imageAlt: "an illustration of an item being clicked on a smart device",
      title: "Bookmark in one click",
      description:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      btnText: "More Info",
      bntLink: "/",
    },
    {
      image: speedySearching,
      imageAlt: "an illustration depicting a search action on a smart device",
      title: "Share your bookmarks",
      description:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      btnText: "More Info",
      bntLink: "/",
    },
    {
      image: easySharing,
      imageAlt: "an illustration showing people sharing items online",
      title: "Bookmark in one click",
      description:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      btnText: "More Info",
      bntLink: "/",
    },
  ],
};