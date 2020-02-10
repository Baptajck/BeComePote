import { expect } from 'chai';

const value = 2;

// Série de tests - Chapitre de tests
describe('Série de tests DEMO', () => {
  // Test
  it('should pass', () => {
    // expect de chai
    expect(value).to.be.equal(2);
  });

  // Test en erreur
  it('should not pass', () => {
    // expect de chai
    expect(false).to.be.equal(true);
  });

  describe('Sous chapitre - pending', () => {
    // Test en attente : pas de fonction de traitement
    it('test pending');

    // Test en attente : .skip
    it.skip('should skip this test', () => {
      // code
      expect(true).to.be.equal(true);
    });
  });
});
