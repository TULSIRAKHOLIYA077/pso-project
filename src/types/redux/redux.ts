export interface KeyboardState {
  input: string;
  capsOn: boolean;
}

export interface PasswordScreenState {
  input: string;
  showKeyboard: boolean;
}

export interface RootState {
  keyboard: KeyboardState;
  passwordScreen: PasswordScreenState;
}