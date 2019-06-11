
import React from 'react';
import i18next from 'src/client/web/app/common/i18n/node_modules/i18next';
import { withRouter } from 'src/client/web/app/common/i18n/node_modules/react-router-dom';
import { I18nextProvider } from 'src/client/web/app/common/i18n/node_modules/react-i18next';
import { connect } from 'src/client/web/app/common/i18n/node_modules/react-redux';
import { getLocale } from '../../../../shared/common/root-state/app/selectors';

import deDE from './locales/de-DE';
import enUS from './locales/en-US';

i18next.init({
    fallbackLng: 'en-US',
    fallbackNS: ['translation'],
    resources: {
        'de-DE': deDE,
        'en-US': enUS,
    },
    parseMissingKeyHandler: (missing) => {
        if (process.env.NODE_ENV === 'development') {
            console.warn('MISSING TRANSLATION:', missing);
        }
        return missing;
    },
});

type PropsT = {
    children: any,
    locale: 'en-US' | 'de-DE',
};

class I18N extends React.PureComponent<PropsT> {
    componentDidMount() {
        i18next.changeLanguage(this.props.locale);
    }

    componentDidUpdate(prevProps: { locale: any; }) {
        const { locale: newLocale } = this.props;
        const { locale: oldLocale } = prevProps;

        if (oldLocale !== newLocale) {
            i18next.changeLanguage(newLocale);
        }
    }

    render() {
        return <I18nextProvider i18n={i18next}>{this.props.children}</I18nextProvider>;
    }
}

const mapStateToProps = (state: { app: any; }) => ({
    locale: getLocale(state),
});

export default withRouter(connect(mapStateToProps, null, null, { pure: false })(I18N));
