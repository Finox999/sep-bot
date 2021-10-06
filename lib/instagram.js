// BY YOGIPW

const axios = require("axios");
const Instagram = require("instagram-web-api");
const fs = require("fs");


username = 'finoooooo_' //your instagram username
password = 'fino2007' //your instagram password

const hexa = new Instagram({ username, password });

hexa.login();
exports.follow = follow = async (username) => {
  axios
    .get(`https://www.instagram.com/${username}/?__a=1`)
    .then(async (kntl) => {
      await hexa.follow({
        userId: kntl.data.logging_page_id.replace("profilePage_", ""),
      });
    });
};
exports.unfollow = unfollow = async (username) => {
  axios
    .get(`https://www.instagram.com/${username}/?__a=1`)
    .then(async (kntl) => {
      await hexa.unfollow({
        userId: kntl.data.logging_page_id.replace("profilePage_", ""),
      });
    });
};
exports.block = block = async (username) => {
  axios
    .get(`https://www.instagram.com/${username}/?__a=1`)
    .then(async (kntl) => {
      await hexa.login();
      await hexa.block({
        userId: kntl.data.logging_page_id.replace("profilePage_", ""),
      });
    });
};
exports.unblock = unblock = async (username) => {
  axios
    .get(`https://www.instagram.com/${username}/?__a=1`)
    .then(async (kntl) => {
      await hexa.unblock({
        userId: kntl.data.logging_page_id.replace("profilePage_", ""),
      });
    });
};
exports.upPhoto = upPhoto = async (url, caption, type) => {
  const { media } = await hexa.uploadPhoto({
    photo: url,
    caption: caption,
    post: type,
  });
  console.log(`https://www.instagram.com/p/${media.code}/`);
};
exports.comment = comment = async (url, comment) => {
  axios
    .get(`https://api.instagram.com/oembed/?url=${url}`)
    .then(async (kntl) => {
      const mediaid = kntl.data.media_id;

      await hexa.addComment({ mediaId: mediaid, text: comment });
      console.log(`sukses menambahkan komentar`);
    });
};
exports.like = like = async (url) => {
  axios
    .get(`https://api.instagram.com/oembed/?url=${url}`)
    .then(async (kntl) => {
      const mediaid = kntl.data.media_id;

      await hexa.addComment({ mediaId: mediaid, text: comment });
      console.log(`sukses like`);
    });
};
exports.like = like = async (url) => {
  axios
    .get(`https://api.instagram.com/oembed/?url=${url}`)
    .then(async (kntl) => {
      const mediaid = kntl.data.media_id;

      await hexa.like({ mediaId: mediaid});
      console.log(`sukses like`);
    });
};
exports.unlike = unlike = async (url) => {
  axios
    .get(`https://api.instagram.com/oembed/?url=${url}`)
    .then(async (kntl) => {
      const mediaid = kntl.data.media_id;

      await hexa.unlike({ mediaId: mediaid});
      console.log(`sukses unlike`);
    });
};
exports.save = save = async (url) => {
  axios
    .get(`https://api.instagram.com/oembed/?url=${url}`)
    .then(async (kntl) => {
      const mediaid = kntl.data.media_id;

      await hexa.like({ mediaId: mediaid});
      console.log(`sukses save postingan`);
    });
};
exports.unsave = unsave = async (url) => {
  axios
    .get(`https://api.instagram.com/oembed/?url=${url}`)
    .then(async (kntl) => {
      const mediaid = kntl.data.media_id;

      await hexa.like({ mediaId: mediaid});
      console.log(`sukses unsave postingan`);
    });
};



