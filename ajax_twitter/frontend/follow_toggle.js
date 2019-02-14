class FollowToggle {

  constructor($el) {
    this.$el = $el,
    this.userId = $el.data("userid"),
    this.followState = $el.data("followstate")
    // debugger
    this.render();

    this.$el.on("click", (e) => {
      this.handleClick(e);
    });
  }

  render () {
    if (this.followState === 'unfollowed') {
      this.$el.text("Follow")
    } else if (this.followState === 'followed') {
      this.$el.text("Unfollow!")
    }
  }

  handleClick (e) {
    e.preventDefault();

    if (this.followState === 'followed') {
      $ajax({
        url: "/users/:user_id/follow",
        method: 'DELETE',
        dataType: "JSON"
      });
    } else if (this.followState === 'unfollowed') {
      $ajax({
        url: "/users/:user_id/follow",
        method: 'POST',
        dataType: "JSON"
      });
    }
  }
}




export default FollowToggle;