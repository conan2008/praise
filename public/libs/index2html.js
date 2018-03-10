const webAssetsHelp = require('./webAssetsHelp');

module.exports = function(templateParams) {

    const _cssList = ['praice'];
    const _web = webAssetsHelp(templateParams, _cssList);
    const _html = 
        `{% extends 'layout.html' %} 
        {% block title %}点赞{% endblock %}
        {% block styles %}` + _web.styles + `{% endblock %}
        {% block content %}
        {% include './praise.html' %}
        {% endblock %}
        {% block scripts %}` + _web.scripts + `{% endblock %}
        `;
    return _html;

}