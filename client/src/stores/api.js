
const exports = module.exports = {};

exports.search = (searchVal) => {
	const sv1 = searchVal + 1;
	const sv2 = searchVal + 2;
	return [
	{'name' : 'Session', 'value': '/src/client/session/session-save.js'},
	{'name' : 'Session Security', 'value': '/src/server/security/session-security.java'},
	{'name' : 'Session Storage', 'value': '/src/client/storage.js'}];
}

exports.envs = [
	{ 'key' : 'qa4', 'val' : 'QA4'},
	{ 'key' : 'stg1', 'val' : 'STG'},
	{ 'key' : 'prod1', 'val' : 'PROD'}
];

exports.apps = [
      { 
        'key' : 'sarine.viewer.templates.widget',
        'val' : 'BASEWIDGET',
        'desc' : 'Base Widget',
        'icon' : 'Roundicons-22.svg'
      },
      { 
        'key' : 'sarine.viewer.templates.dashboard', 
        'val' : 'BASEDASHBOARD',
        'desc' : 'Base Dashboard',
        'icon' : 'Roundicons-24.svg'
      },
      { 
        'key' : 'sarine.viewer.3dfullinspection', 
        'val' : '3D-ATOM',
        'desc' : '3D Atom',
        'icon' : 'Roundicons-30.svg'
      },
      { 
        'key' : 'sarine.viewer.templates.jewelry', 
        'val' : 'BASEJEWELRY',
        'desc' : 'Base Jewelry',
        'icon' : 'Roundicons-54.svg'
      },
      { 
        'key' : 'sarine.viewer.core', 
        'val' : 'CORE',
        'desc' : 'Viewer Core',
        'icon' : 'Roundicons-55.svg'
      },
      { 
        'key' : 'sarine.viewer.templates.fullscreen', 
        'val' : 'FULLSCREEN',
        'desc' : 'Base Full Screen',
        'icon' : 'Roundicons-60.svg'
      }
   ];


