// CSSinJS.tsx
import React from 'react';
import { colors, spacing } from './variables';

const CSSinJS = () => {
    const styles = {
        backgroundColor: colors.primary,
        padding: spacing.medium,
    };

    return (
        <div style={styles}>
            <h1>Hello World</h1>
        </div>
    );
};

export default CSSinJS;