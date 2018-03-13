const webAssetsHelp = require('./webAssetsHelp');

module.exports = function(templateParams) {

    const _cssList = ['praise'];
    const _web = webAssetsHelp(templateParams, _cssList);
    const _html = 
        `{% extends 'layout.html' %} 
        {% block title %}点赞{% endblock %}
        {% block styles %}` + _web.styles + `{% endblock %}
        {% block content %}
        {% include './thumb.html' %}
        {% endblock %}
        {% block scripts %}` + _web.scripts + `{% endblock %}
        `;
    return _html;

}