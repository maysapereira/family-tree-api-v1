'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Members', [
      {
        name: 'Sony',
        parents: '',
        grandparents: '',
        children: 'Mike',
        cousins: '',
        brothers_sisters: '',
        createAt: new Date(),
        updateAt: new Date()
      },
      {
        name: 'Mike',
        parents: 'Sony',
        grandparents: '',
        children: 'Dunny, Bruce',
        cousins: '',
        brothers_sisters: '',
        createAt: new Date(),
        updateAt: new Date()
      },
      {
        name: 'Phoebe',
        parents: 'Martin, Anastasia',
        grandparents: '',
        children: 'Dunny, Bruce',
        cousins: '',
        brothers_sisters: 'Ursula',
        createAt: new Date(),
        updateAt: new Date()
      },
      {
        name: 'Dunny',
        parents: 'Mike, Phoebe',
        grandparents: 'Sony, Martin, Anastasia',
        children: '',
        cousins: 'Jacqueline',
        brothers_sisters: 'Bruce',
        createAt: new Date(),
        updateAt: new Date()
      },
      {
        name: 'Bruce',
        parents: 'Mike, Phoebe',
        grandparents: 'Sony, Martin, Anastasia',
        children: '',
        cousins: 'Jacqueline',
        brothers_sisters: 'Dunny',
        createAt: new Date(),
        updateAt: new Date()
      },
      {
        name: 'Martin',
        parents: '',
        grandparents: '',
        children: 'Phoebe, Ursula',
        cousins: '',
        brothers_sisters: '',
        createAt: new Date(),
        updateAt: new Date()
      },
      {
        name: 'Anastasia',
        parents: '',
        grandparents: '',
        children: 'Phoebe, Ursula',
        cousins: '',
        brothers_sisters: '',
        createAt: new Date(),
        updateAt: new Date()
      },
      {
        name: 'Ursula',
        parents: 'Martin, Anastasia',
        grandparents: '',
        children: 'Jacqueline',
        cousins: '',
        brothers_sisters: 'Phoebe',
        createAt: new Date(),
        updateAt: new Date()
      },
      {
        name: 'Jacqueline',
        parents: 'Ursula, Eric',
        grandparents: 'Martin, Anastasia, Ellen, Oprah',
        children: '',
        cousins: 'Dunny, Bruce',
        brothers_sisters: 'Melody',
        createAt: new Date(),
        updateAt: new Date()
      },
      {
        name: 'Eric',
        parents: 'Ellen, Oprah',
        grandparents: '',
        children: 'Jacqueline, Melody',
        cousins: '',
        brothers_sisters: '',
        createAt: new Date(),
        updateAt: new Date()
      },
      {
        name: 'Ellen',
        parents: '',
        grandparents: '',
        children: 'Eric',
        cousins: '',
        brothers_sisters: '',
        createAt: new Date(),
        updateAt: new Date()
      },
      {
        name: 'Oprah',
        parents: '',
        grandparents: '',
        children: 'Eric',
        cousins: '',
        brothers_sisters: '',
        createAt: new Date(),
        updateAt: new Date()
      },
      {
        name: 'Melody',
        parents: 'Eric, Ariel',
        grandparents: 'Ellen, Oprah',
        children: '',
        cousins: '',
        brothers_sisters: 'Jacqueline',
        createAt: new Date(),
        updateAt: new Date()
      },
      {
        name: 'Ariel',
        parents: '',
        grandparents: '',
        children: 'Melody',
        cousins: '',
        brothers_sisters: '',
        createAt: new Date(),
        updateAt: new Date()
      },




    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Members', null, {});
  }
};
