var user = {
  name: "xj",
  getname: function() {
    return this.name;
  },
  setname: function(_name) {
    this.name = _name;
  }
}

console.log(user.getname());
user.setname("xm");
console.log(user.getname());
