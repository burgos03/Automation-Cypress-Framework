/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  try{
    on('task', {
      fsCreateDir ({dir}) {
        if (!fs.existsSync(dir)){
          fs.mkdirSync(dir);
        }

        return null
      },

      fsWriteFile ({filename, data}) {
        // 'w' - Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
        fs.writeFile(filename, data, { flag: 'w' }, function (err) {
          if (err) throw err;
        });

        return null
      },

      fsAppendFile ({filename, data}) {
        fs.appendFile(filename, data + '\n', (err) => {
          if (err) throw err;
        });
  
        return null
      }
    })
  } catch (error) {
    console.error(error)
  }
}
