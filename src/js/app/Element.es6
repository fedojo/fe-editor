class Element {

    constructor(config) {
        this.cfg = config || null;

        this.$addElement;
        this.$removeElement;
        this.$editElement;

        this.contentElements: [];
        this.elHTML: '';
        this.selector: '';

        this.elementTemplate: `<div></div>`;

    }

    // Thanks Krasimir http://krasimirtsonev.com/blog/article/Javascript-template-engine-in-just-20-line
    createFromTpl(html, options) {
      var re = /<%([^%>]+)?%>/g, reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, code = 'var r=[];\n', cursor = 0, match;
      var add = function(line, js) {
          js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
              (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
          return add;
      }
      while(match = re.exec(html)) {
          add(html.slice(cursor, match.index))(match[1], true);
          cursor = match.index + match[0].length;
      }
      add(html.substr(cursor, html.length - cursor));
      code += 'return r.join("");';
      return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
    }

    /**
    TODO based on
    https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings
    */
    createFromTplES6(template, options) {
        var string;
        return string;
    }

    bindEvents() {
        this.$addElement.addEventListener();
        this.$removeElement.addEventListener();
        this.$editElement.addEventListener();
    }

    prepareElement() {

    }

    renderElement() {

    }
}
