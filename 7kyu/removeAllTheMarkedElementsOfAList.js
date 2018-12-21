Array.prototype.remove_ = function(integer_list, values_list) {
  let newList = [];
  integer_list.map((e, i) => {
    if (!values_list.includes(e)) {
      newList.push(e);
    }
  });
  return newList;
};
