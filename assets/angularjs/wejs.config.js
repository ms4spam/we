
define('wejs.config',function () {

  var wejs = {};
  wejs.config = {
    locale: 'pt-br',
    applicationUrl: '/angularjs/',
    templateUrl: '/templates/wejs/pt-br/angularjs/'
  }

  wejs.config.regions = {};
  wejs.config.regions.sidebar = {};
  wejs.config.regions.sidebar.name = 'sidebar';
  wejs.config.regions.sidebar.widgets = [];

  wejs.menus = {};
  wejs.menus['left-menu'] = {
    links: [
      {
        title: 'Lista de contatos',
        url: '/users',
        content: 'Contatos'
      },
      {
        title: 'Admin Widgets',
        url: '/admin/widgets',
        content: 'Admin Widgets'
      }
    ]
  };

  wejs.widgets = {};
  wejs.widgets['we-news'] = {
    type: 'we-news',
    description: 'A list newest user activities',
    widgetType: 'directive'
  };
  wejs.widgets['we-menu'] = {
    type: 'we-menu',
    description: 'Menu block',
    widgetType: 'directive',
    scopeDataConfigs: [
      {
        //the key to be used in the result values {... "username": "johndoe" ... }
        key: 'title',
        type: 'text',
        label: 'title',
        required: true
      }
    ],

    scopeDataConfigFormOptions: {
      //Set the id of the form
      //uniqueFormId: 'myFormId',

      //Hide the submit button that is added automaticaly
      //default: false
      hideSubmit: false,

      //Set the text on the default submit button
      //default: Submit
      submitCopy: 'Save configs'
    }
  }

  var newsWidget = {
    type: 'we-news',
    widgetType: 'directive'
  }

  var menuWidget = {
    type: 'we-menu',
    widgetType: 'directive',
    scopeData: new Array(
      {
        name: 'title',
        value: 'Menu de usuário'
      },
      {
        name: 'menu',
        value: 'left-menu'
      },
      { name: 'links',
        value: wejs.menus['left-menu'].links
      }
    )
  }

  wejs.config.regions.sidebar.widgets.push(menuWidget);
  wejs.config.regions.sidebar.widgets.push(newsWidget);

  /**
   * Get template url for angularjs templates
   * @param  {string} defaultUrlString default url string
   * @return {string}                  custom template like localized template
   */
  wejs.getTemplateUrl = function(defaultUrlString){
    return this.config.templateUrl+defaultUrlString;
  }

  window['wejs'] = wejs;

  //return wejs;
});
