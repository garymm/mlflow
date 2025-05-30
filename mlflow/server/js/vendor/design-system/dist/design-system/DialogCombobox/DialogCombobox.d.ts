import * as Popover from '@radix-ui/react-popover';
import type { ReactNode } from 'react';
import { DesignSystemEventProviderAnalyticsEventTypes } from '../DesignSystemEventProvider';
import type { AnalyticsEventValueChangeNoPiiFlagProps, HTMLDataAttributes } from '../types';
export type ConditionalOptionalLabel = {
    id?: string;
    label: ReactNode;
} | {
    id: string;
    label?: ReactNode;
};
export interface DialogComboboxProps extends Popover.PopoverProps, HTMLDataAttributes, AnalyticsEventValueChangeNoPiiFlagProps<DesignSystemEventProviderAnalyticsEventTypes.OnValueChange | DesignSystemEventProviderAnalyticsEventTypes.OnView> {
    value?: string[];
    stayOpenOnSelection?: boolean;
    multiSelect?: boolean;
    emptyText?: string;
    scrollToSelectedElement?: boolean;
    rememberLastScrollPosition?: boolean;
}
export declare const DialogCombobox: ({ children, label, id, value, open, emptyText, scrollToSelectedElement, rememberLastScrollPosition, componentId, analyticsEvents, valueHasNoPii, onOpenChange, ...props }: DialogComboboxProps & ConditionalOptionalLabel) => import("@emotion/react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DialogCombobox.d.ts.map