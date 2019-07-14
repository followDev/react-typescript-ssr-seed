"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Library
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
// Shared Components
const content_1 = __importDefault(require("@omega-shared-components/content"));
const NewAppScreen_1 = require("react-native/Libraries/NewAppScreen");
const styles = react_native_1.StyleSheet.create({
    scrollView: {
        backgroundColor: NewAppScreen_1.Colors.lighter
    },
    engine: {
        position: 'absolute',
        right: 0
    },
    body: {
        backgroundColor: NewAppScreen_1.Colors.white,
        height: '100%'
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: NewAppScreen_1.Colors.black
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: NewAppScreen_1.Colors.dark
    },
    highlight: {
        fontWeight: '700'
    },
    footer: {
        color: NewAppScreen_1.Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right'
    },
    sharedComponent: {
        flex: 1,
        padding: 20,
        marginBottom: 50
    }
});
const App = () => {
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(react_native_1.StatusBar, { barStyle: 'dark-content' }),
        react_1.default.createElement(react_native_1.SafeAreaView, null,
            react_1.default.createElement(react_native_1.ScrollView, { contentInsetAdjustmentBehavior: 'automatic', style: styles.scrollView },
                react_1.default.createElement(NewAppScreen_1.Header, null),
                global.HermesInternal == null ? null : (react_1.default.createElement(react_native_1.View, { style: styles.engine },
                    react_1.default.createElement(react_native_1.Text, { style: styles.footer }, "Engine: Hermes"))),
                react_1.default.createElement(react_native_1.View, { style: styles.body },
                    react_1.default.createElement(react_native_1.View, { style: styles.sectionContainer },
                        react_1.default.createElement(react_native_1.Text, { style: styles.sectionTitle }, "Shared Component"),
                        react_1.default.createElement(react_native_1.Text, { style: styles.sectionDescription }, "Below is a example component shared between web and mobile.")),
                    react_1.default.createElement(react_native_1.View, { style: styles.sectionContainer },
                        react_1.default.createElement(content_1.default, { style: styles.sharedComponent })))))));
};
exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3ZpcGlud29yay9odGRvY3MvcmVhY3Qtc3NyLWFkdmFuY2VkLXNlZWQvc3JjL2NsaWVudC9tb2JpbGUvQXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxVQUFVO0FBQ1YsK0NBQXdDO0FBQ3hDLCtDQU9zQjtBQUV0QixvQkFBb0I7QUFDcEIsK0VBQStEO0FBRS9ELHNFQUFxRTtBQUVyRSxNQUFNLE1BQU0sR0FBRyx5QkFBVSxDQUFDLE1BQU0sQ0FBQztJQUNoQyxVQUFVLEVBQUU7UUFDWCxlQUFlLEVBQUUscUJBQU0sQ0FBQyxPQUFPO0tBQy9CO0lBQ0QsTUFBTSxFQUFFO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsS0FBSyxFQUFFLENBQUM7S0FDUjtJQUNELElBQUksRUFBRTtRQUNMLGVBQWUsRUFBRSxxQkFBTSxDQUFDLEtBQUs7UUFDN0IsTUFBTSxFQUFFLE1BQU07S0FDZDtJQUNELGdCQUFnQixFQUFFO1FBQ2pCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsaUJBQWlCLEVBQUUsRUFBRTtLQUNyQjtJQUNELFlBQVksRUFBRTtRQUNiLFFBQVEsRUFBRSxFQUFFO1FBQ1osVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFLHFCQUFNLENBQUMsS0FBSztLQUNuQjtJQUNELGtCQUFrQixFQUFFO1FBQ25CLFNBQVMsRUFBRSxDQUFDO1FBQ1osUUFBUSxFQUFFLEVBQUU7UUFDWixVQUFVLEVBQUUsS0FBSztRQUNqQixLQUFLLEVBQUUscUJBQU0sQ0FBQyxJQUFJO0tBQ2xCO0lBQ0QsU0FBUyxFQUFFO1FBQ1YsVUFBVSxFQUFFLEtBQUs7S0FDakI7SUFDRCxNQUFNLEVBQUU7UUFDUCxLQUFLLEVBQUUscUJBQU0sQ0FBQyxJQUFJO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osVUFBVSxFQUFFLEtBQUs7UUFDakIsT0FBTyxFQUFFLENBQUM7UUFDVixZQUFZLEVBQUUsRUFBRTtRQUNoQixTQUFTLEVBQUUsT0FBTztLQUNsQjtJQUNELGVBQWUsRUFBRTtRQUNoQixJQUFJLEVBQUUsQ0FBQztRQUNQLE9BQU8sRUFBRSxFQUFFO1FBQ1gsWUFBWSxFQUFFLEVBQUU7S0FDaEI7Q0FDRCxDQUFDLENBQUM7QUFFSCxNQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUU7SUFDaEIsT0FBTyxDQUNOLDhCQUFDLGdCQUFRO1FBQ1IsOEJBQUMsd0JBQVMsSUFBQyxRQUFRLEVBQUMsY0FBYyxHQUFHO1FBQ3JDLDhCQUFDLDJCQUFZO1lBQ1osOEJBQUMseUJBQVUsSUFDViw4QkFBOEIsRUFBQyxXQUFXLEVBQzFDLEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVTtnQkFFeEIsOEJBQUMscUJBQU0sT0FBRztnQkFDUixNQUFjLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNoRCw4QkFBQyxtQkFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTTtvQkFDekIsOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0scUJBQXVCLENBQzNDLENBQ1A7Z0JBQ0QsOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUk7b0JBQ3ZCLDhCQUFDLG1CQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0I7d0JBQ25DLDhCQUFDLG1CQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxZQUFZLHVCQUF5Qjt3QkFDekQsOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGtCQUFrQixrRUFFL0IsQ0FDRDtvQkFDUCw4QkFBQyxtQkFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsZ0JBQWdCO3dCQUNuQyw4QkFBQyxpQkFBZSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsZUFBZSxHQUFJLENBQzVDLENBQ0QsQ0FDSyxDQUNDLENBQ0wsQ0FDWCxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsR0FBRyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXBpbndvcmsvaHRkb2NzL3JlYWN0LXNzci1hZHZhbmNlZC1zZWVkL3NyYy9jbGllbnQvbW9iaWxlL0FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTGlicmFyeVxuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcblx0U2FmZUFyZWFWaWV3LFxuXHRTdHlsZVNoZWV0LFxuXHRTY3JvbGxWaWV3LFxuXHRWaWV3LFxuXHRUZXh0LFxuXHRTdGF0dXNCYXJcbn0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuLy8gU2hhcmVkIENvbXBvbmVudHNcbmltcG9ydCBTaGFyZWRDb21wb25lbnQgZnJvbSAnQG9tZWdhLXNoYXJlZC1jb21wb25lbnRzL2NvbnRlbnQnO1xuXG5pbXBvcnQgeyBIZWFkZXIsIENvbG9ycyB9IGZyb20gJ3JlYWN0LW5hdGl2ZS9MaWJyYXJpZXMvTmV3QXBwU2NyZWVuJztcblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuXHRzY3JvbGxWaWV3OiB7XG5cdFx0YmFja2dyb3VuZENvbG9yOiBDb2xvcnMubGlnaHRlclxuXHR9LFxuXHRlbmdpbmU6IHtcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHRyaWdodDogMFxuXHR9LFxuXHRib2R5OiB7XG5cdFx0YmFja2dyb3VuZENvbG9yOiBDb2xvcnMud2hpdGUsXG5cdFx0aGVpZ2h0OiAnMTAwJSdcblx0fSxcblx0c2VjdGlvbkNvbnRhaW5lcjoge1xuXHRcdG1hcmdpblRvcDogMzIsXG5cdFx0cGFkZGluZ0hvcml6b250YWw6IDI0XG5cdH0sXG5cdHNlY3Rpb25UaXRsZToge1xuXHRcdGZvbnRTaXplOiAyNCxcblx0XHRmb250V2VpZ2h0OiAnNjAwJyxcblx0XHRjb2xvcjogQ29sb3JzLmJsYWNrXG5cdH0sXG5cdHNlY3Rpb25EZXNjcmlwdGlvbjoge1xuXHRcdG1hcmdpblRvcDogOCxcblx0XHRmb250U2l6ZTogMTgsXG5cdFx0Zm9udFdlaWdodDogJzQwMCcsXG5cdFx0Y29sb3I6IENvbG9ycy5kYXJrXG5cdH0sXG5cdGhpZ2hsaWdodDoge1xuXHRcdGZvbnRXZWlnaHQ6ICc3MDAnXG5cdH0sXG5cdGZvb3Rlcjoge1xuXHRcdGNvbG9yOiBDb2xvcnMuZGFyayxcblx0XHRmb250U2l6ZTogMTIsXG5cdFx0Zm9udFdlaWdodDogJzYwMCcsXG5cdFx0cGFkZGluZzogNCxcblx0XHRwYWRkaW5nUmlnaHQ6IDEyLFxuXHRcdHRleHRBbGlnbjogJ3JpZ2h0J1xuXHR9LFxuXHRzaGFyZWRDb21wb25lbnQ6IHtcblx0XHRmbGV4OiAxLFxuXHRcdHBhZGRpbmc6IDIwLFxuXHRcdG1hcmdpbkJvdHRvbTogNTBcblx0fVxufSk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHQ8U3RhdHVzQmFyIGJhclN0eWxlPSdkYXJrLWNvbnRlbnQnIC8+XG5cdFx0XHQ8U2FmZUFyZWFWaWV3PlxuXHRcdFx0XHQ8U2Nyb2xsVmlld1xuXHRcdFx0XHRcdGNvbnRlbnRJbnNldEFkanVzdG1lbnRCZWhhdmlvcj0nYXV0b21hdGljJ1xuXHRcdFx0XHRcdHN0eWxlPXtzdHlsZXMuc2Nyb2xsVmlld31cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdFx0XHR7KGdsb2JhbCBhcyBhbnkpLkhlcm1lc0ludGVybmFsID09IG51bGwgPyBudWxsIDogKFxuXHRcdFx0XHRcdFx0PFZpZXcgc3R5bGU9e3N0eWxlcy5lbmdpbmV9PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dCBzdHlsZT17c3R5bGVzLmZvb3Rlcn0+RW5naW5lOiBIZXJtZXM8L1RleHQ+XG5cdFx0XHRcdFx0XHQ8L1ZpZXc+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8VmlldyBzdHlsZT17c3R5bGVzLmJvZHl9PlxuXHRcdFx0XHRcdFx0PFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyfT5cblx0XHRcdFx0XHRcdFx0PFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGl0bGV9PlNoYXJlZCBDb21wb25lbnQ8L1RleHQ+XG5cdFx0XHRcdFx0XHRcdDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkRlc2NyaXB0aW9ufT5cblx0XHRcdFx0XHRcdFx0XHRCZWxvdyBpcyBhIGV4YW1wbGUgY29tcG9uZW50IHNoYXJlZCBiZXR3ZWVuIHdlYiBhbmQgbW9iaWxlLlxuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHQ8L1ZpZXc+XG5cdFx0XHRcdFx0XHQ8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJ9PlxuXHRcdFx0XHRcdFx0XHQ8U2hhcmVkQ29tcG9uZW50IHN0eWxlPXtzdHlsZXMuc2hhcmVkQ29tcG9uZW50fSAvPlxuXHRcdFx0XHRcdFx0PC9WaWV3PlxuXHRcdFx0XHRcdDwvVmlldz5cblx0XHRcdFx0PC9TY3JvbGxWaWV3PlxuXHRcdFx0PC9TYWZlQXJlYVZpZXc+XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJ2ZXJzaW9uIjozfQ==