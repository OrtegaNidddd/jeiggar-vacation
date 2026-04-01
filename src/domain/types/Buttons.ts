export type ButtonVariant = 'primary' | 'secondary';

export type LinkConfig = {
    to: string;
}

export type LabeledLinkConfig = LinkConfig & {
    label: string;
}

export type ButtonConfig = {
    label: string;
    variant?: ButtonVariant;
    to?: string;
}

export type NavigableButtonConfig = Omit<ButtonConfig, 'to'> & LinkConfig;