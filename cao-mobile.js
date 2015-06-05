$(document).ready(function() {
    var $home = $("#home");
    var $become_judge = $("#become-judge");
    var $join_btn = $("#join-btn");
    var $become_judge_btn = $("#become-judge-btn");

    cao.on_socket_open = function() {
        $join_btn.show();
        $join_btn.on("click", function () {
            cao.join_game(prompt('Name of the game'));
        });
    };

    cao.on_join_game_ok = function() {
        $home.removeClass("current");
        $become_judge.addClass("current");
        $become_judge_btn.on("click", function () {
            cao.pick_black_card();
        });
    };

    cao.on_show_white_card = function(idx, desc) {
        identifier = 'white_card_' + idx;
        content = '<li id="' + identifier + '">' + desc + '</li>';

        $('#white_cards').append(content);

        $('#' + identifier).dblclick(this.gen_callback_white_card(idx));
    };

    cao.on_show_played_card = function(idx, desc) {
        identifier = 'played_card_' + idx;

        content = '<li id="' + identifier + '">' + desc + '</li>';

        $('#played_cards').append(content);

        $('#' + identifier).dblclick(this.gen_callback_played_card(idx));
    };


    cao.on_pick_black_card_ok = function() {
        $('#btn_collect').show();
        $('#btn_pick_black').hide();
    };

    cao.on_show_black_card = function(desc) {
        $('#black_card').show();
        $('#black_card').html(desc);
    };


    cao.on_play_white_card_ok = function(idx) {
        identifier = 'white_card_' + idx;
        $('#' + identifier).remove();
    };

    cao.on_designate_card_ok = function() {
        $('#played_cards').empty();
        $('#played_cards').hide();
        $('#black_card').hide();
        $('#btn_collect').hide();
        $('#btn_pick_black').show();
    };

    cao.on_collect_cards_ok = function() {
        $('#btn_collect').hide();
        $('#played_cards').show();
    };

    cao.on_judge_designed = function() {
        $('#btn_pick_black').hide();
    };

    cao.on_judge_needed = function() {
        $('#btn_pick_black').show();
    };

    cao.run();
});