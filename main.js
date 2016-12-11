var scacchiera = [];

window.onload = function init() {
    scacchiera = Array.prototype.map.call(document.querySelectorAll('#chesstable_div tr'), function(tr) {
        return Array.prototype.map.call(tr.querySelectorAll('td'), function(td) {
            return td;
        });
    });
}