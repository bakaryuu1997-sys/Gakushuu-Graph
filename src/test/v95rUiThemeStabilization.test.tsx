import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { useAppTheme } from '../components/useAppTheme';

afterEach(() => {
  cleanup();
  document.documentElement.classList.remove('dark');
  delete document.documentElement.dataset.theme;
  document.documentElement.style.colorScheme = '';
  window.localStorage.clear();
});

function ThemeHarness() {
  const { theme, toggleTheme } = useAppTheme();
  return <button type="button" onClick={toggleTheme}>theme:{theme}</button>;
}

describe('V95R UI/theme stabilization', () => {
  it('uses the stored light preference by default', async () => {
    window.localStorage.setItem('vibe-theme', 'light');
    render(<ThemeHarness />);

    await waitFor(() => {
      expect(screen.getByText('theme:light')).toBeTruthy();
      expect(document.documentElement.classList.contains('dark')).toBe(false);
      expect(document.documentElement.dataset.theme).toBe('light');
      expect(document.documentElement.style.colorScheme).toBe('light');
    });
  });

  it('toggles root dark class from the manual theme switch', async () => {
    render(<ThemeHarness />);
    fireEvent.click(screen.getByRole('button', { name: 'theme:light' }));

    await waitFor(() => {
      expect(document.documentElement.classList.contains('dark')).toBe(true);
      expect(document.documentElement.dataset.theme).toBe('dark');
      expect(document.documentElement.style.colorScheme).toBe('dark');
      expect(window.localStorage.getItem('vibe-theme')).toBe('dark');
    });
  });

  it('restores a stored dark preference on first render', async () => {
    window.localStorage.setItem('vibe-theme', 'dark');
    render(<ThemeHarness />);

    await waitFor(() => {
      expect(screen.getByText('theme:dark')).toBeTruthy();
      expect(document.documentElement.classList.contains('dark')).toBe(true);
      expect(document.documentElement.dataset.theme).toBe('dark');
    });
  });
});
