class Post {
  static async postServer(obj) {
    try {
      await fetch("http://itgirlschool.justmakeit.ru/api/words/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(obj),
      });
    } catch (e) {
      console.error(e);
    }
  }
}

export default Post;
