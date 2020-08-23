class Util {
  static truncate(str, n) {
    let string = str;
    string = string.replace(/(<([^>]+)>)/gi, "");

    return string.length > n ? string.substr(0, n - 1) + "..." : string;
  }
}

export default Util;
