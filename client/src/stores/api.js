
import github from './github.js';

const exports = module.exports = {};

exports.org = "sarinetechnologies";

exports.envs = [
	{ 'key' : 'qa4', 'val' : 'QA4'},
	{ 'key' : 'stg1', 'val' : 'STG'},
	{ 'key' : 'prod1', 'val' : 'PROD'}
];

exports.findAppByName = function (name) {
  return this.apps.filter((app)=> {
    return app.name === name;
  })[0];
};


exports.apps = [
      {
        'repo' : 'sarine.viewer.templates.widget',
        'name' : 'BASEWIDGET',
        'desc' : 'Base Widget',
        'icon' : 'Roundicons-22.svg',
        'enable': true
      },
      {
        'repo' : 'sarine.viewer.templates.dashboard',
        'name' : 'BASEDASHBOARD',
        'desc' : 'Base Dashboard',
        'icon' : 'Roundicons-24.svg',
        'enable': true
      },
      {
        'repo' : 'sarine.viewer.3dfullinspection',
        'name' : '3D-ATOM',
        'desc' : '3D Atom',
        'icon' : 'Roundicons-30.svg',
        'enable': true
      },
      {
        'repo' : 'sarine.viewer.templates.jewelry',
        'name' : 'BASEJEWELRY',
        'desc' : 'Base Jewelry',
        'icon' : 'Roundicons-54.svg',
        'enable': false
      },
      {
        'repo' : 'sarine.viewer.core',
        'name' : 'CORE',
        'desc' : 'Viewer Core',
        'icon' : 'Roundicons-55.svg',
        'enable': false
      },
      {
        'repo' : 'sarine.viewer.templates.fullscreen',
        'name' : 'FULLSCREEN',
        'desc' : 'Base Full Screen',
        'icon' : 'Roundicons-60.svg',
        'enable': false
      }
   ];


