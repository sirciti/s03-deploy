import { render, fireEvent } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Binding from '../src/lib/Binding.svelte';

describe('Binding component', () => {
  it('should render correctly with empty input', () => {
    const { getByText, queryByText } = render(Binding);

    // Vérifie que le texte "Aucune valeur" est affiché si le champ est vide
    expect(getByText('Aucune valeur')).toBeInTheDocument();
    // Vérifie que le message d'erreur n'est pas affiché
    expect(queryByText('Le champ doit avoir au moins 3 caractères')).not.toBeInTheDocument();
  });

  it('should display error message if input is too short', async () => {
    const { getByRole, getByText } = render(Binding);
    const input = getByRole('textbox');

    // Simule la saisie d'une valeur trop courte
    await fireEvent.input(input, { target: { value: 'ab' } });

    // Vérifie que le message d'erreur s'affiche
    expect(getByText('Le champ doit avoir au moins 3 caractères')).toBeInTheDocument();
  });

  it('should display error message if input is too long', async () => {
    const { getByRole, getByText } = render(Binding);
    const input = getByRole('textbox');

    // Simule la saisie d'une valeur trop longue
    await fireEvent.input(input, { target: { value: 'abcdefghijk' } });

    // Vérifie que le message d'erreur s'affiche
    expect(getByText('La valeur est trop longue')).toBeInTheDocument();
  });

  it('should display input value when valid', async () => {
    const { getByRole, queryByText } = render(Binding);
    const input = getByRole('textbox');

    // Simule la saisie d'une valeur valide
    await fireEvent.input(input, { target: { value: 'abc' } });

    // Vérifie que le message d'erreur n'est pas affiché
    expect(queryByText('Le champ doit avoir au moins 3 caractères')).not.toBeInTheDocument();
    expect(queryByText('La valeur est trop longue')).not.toBeInTheDocument();

    // Vérifie que la valeur saisie est affichée
    expect(queryByText('La valeur saisie est : abc')).toBeInTheDocument();
  });
});
