angular.module('getPriceApp.common.models', [])
  .factory('User', function() {
    return {
      users: [{
        id: 1,
        priceType: "Д+",
        email: "ligula.Nullam@montes.net",
        firstname: "Mark",
        lastname: "Thompson",
        city: "Ижевск",
        legalPerson: "ООО Ромашка"
      }, {
        id: 2,
        priceType: "VIP",
        email: "ac@Fusce.org",
        firstname: "Ursa",
        lastname: "Haynes",
        city: "Ижевск",
        legalPerson: "ООО Ромашка"
      }, {
        id: 3,
        priceType: "VIP",
        email: "luctus@id.org",
        firstname: "Garth",
        lastname: "Haley",
        city: "Ижевск",
        legalPerson: "ООО Ромашка"
      }, {
        id: 4,
        priceType: "Д+",
        email: "felis@Nulla.org",
        firstname: "Brett",
        lastname: "Mercer",
        city: "Ижевск",
        legalPerson: "ООО Ромашка"
      }, {
        id: 5,
        priceType: "Д+",
        email: "elit.a@Maurisnon.edu",
        firstname: "Kelsie",
        lastname: "Huffman",
        city: "Ижевск",
        legalPerson: "ООО Ромашка"
      }, {
        id: 6,
        priceType: "Д+",
        email: "aliquam.eros@mi.ca",
        firstname: "Yetta",
        lastname: "Lucas",
        city: "Ижевск",
        legalPerson: "ООО Ромашка"
      }, ],
      getAll: function() {
        return this.users;
      },
      getUserById: function(id) {
        for (var i in this.users) {
          if (this.users[i].id === id) {
            return this.users[i];
          }
        }
      }
    };
  })
  .factory('Pricelist', function() {
    return {
      pricelists: [{
        active: true,
        price: "Д+",
        filename: "sed dui Fusce.xls",
        downloads: 188,
        dl_rate: 0.53,
        date_uploaded: 1301090400
      }, {
        active: true,
        price: "VIP",
        filename: "orci tincidunt.xls",
        downloads: 63,
        dl_rate: 0.35,
        date_uploaded: 1301090400
      }, {
        active: false,
        price: "VIP",
        filename: "diam.xls",
        downloads: 127,
        dl_rate: 0.95,
        date_uploaded: 1301090400
      }, {
        active: false,
        price: "VIP",
        filename: "lobortis.xls",
        downloads: 102,
        dl_rate: 0.01,
        date_uploaded: 1301090400
      }, {
        active: false,
        price: "Д+",
        filename: "nibh Donec.xls",
        downloads: 43,
        dl_rate: 0.54,
        date_uploaded: 1301090400
      }, {
        active: false,
        price: "VIP",
        filename: "mi tempor.xls",
        downloads: 118,
        dl_rate: 0.89,
        date_uploaded: 1301090400
      }, {
        active: false,
        price: "Аксы",
        filename: "Etiam.xls",
        downloads: 196,
        dl_rate: 0.92,
        date_uploaded: 1301090400
      }],
      getAll: function() {
        return this.pricelists;
      },
      getPricelistByUserPermissions: function(permissions) {
        for (var i in this.pricelists) {
          if (this.pricelists[i].id === id) {
            return this.pricelists[i];
          }
        }
      }
    }
  })