import FollowToggle from "./follow_toggle.js";

window.FollowToggle = FollowToggle 

$(() => {
  const $buttons = $("button.follow-toggle");

  $buttons.each((idx, button) => {
    new FollowToggle($(button));
  })
});