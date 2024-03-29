export default {
	install(Vue) {
		require('helper-vue-components').default.install(Vue);
		require('text-contents-vue-components').default.install(Vue);

		require('./Templates/templateRegister').default.install()

		registerVueComponent(
			'blue-admin-page', 
			require('./AdminPage/Component.vue').default, 
			Vue,
			'blue-admin-vue-components/AdminPage/Component.vue'
		);
		registerVueComponent(
			'blue-admin-centered-content',
			require('./CenteredContent/Component.vue').default,
			Vue,
			'blue-admin-vue-components/CenteredContent/Component.vue'
		);

		registerVueComponent(
			'blue-admin-form',
			require('./Forms/AdminForm/Component.vue').default,
			Vue,
			'blue-admin-vue-components/Forms/AdminForm/Component.vue'
		);
		registerVueComponent(
			'blue-admin-form-with-image',
			require('./Forms/FormWithImage/Component.vue').default,
			Vue,
			'blue-admin-vue-components/Forms/FormWithImage/Component.vue'
		);
		registerVueComponent(
			'blue-admin-input',
			require('./Forms/Items/Input/Component.vue').default,
			Vue,
			'blue-admin-vue-components/Forms/Items/Input/Component.vue'
		);
		registerVueComponent(
			'blue-admin-checkbox',
			require('./Forms/Items/Checkbox/Component.vue').default,
			Vue,
			'blue-admin-vue-components/Forms/Items/Checkbox/Component.vue'
		);
		registerVueComponent(
			'blue-admin-facebook-button',
			require('./Forms/Items/Buttons/FacebookButton/Component.vue').default,
			Vue,
			'blue-admin-vue-components/Forms/Items/Buttons/FacebookButton/Component.vue'
		);
		registerVueComponent(
			'blue-admin-google-button',
			require('./Forms/Items/Buttons/GoogleButton/Component.vue').default,
			Vue,
			'blue-admin-vue-components/Forms/Items/Buttons/GoogleButton/Component.vue'
		);
		registerVueComponent(
			'blue-admin-primary-button',
			require('./Forms/Items/Buttons/PrimaryButton/Component.vue').default,
			Vue,
			'blue-admin-vue-components/Forms/Items/Buttons/PrimaryButton/Component.vue'
		);
		registerVueComponent(
			'blue-admin-centered-link', 
			require('./Forms/Items/CenteredLink/Component.vue').default, 
			Vue,
			'blue-admin-vue-components/Forms/Items/CenteredLink/Component.vue'
		);

		registerVueComponent(
			'blue-admin-sidebar',
			require('./Sidebar/Sidebar/Component.vue').default,
			Vue,
			'blue-admin-vue-components/Sidebar/Sidebar/Component.vue'
		);
		registerVueComponent(
			'blue-admin-sidebar-brand-icon',
			require('./Sidebar/BrandIcon/Component.vue').default, 
			Vue,
			'blue-admin-vue-components/Sidebar/BrandIcon/Component.vue'
		);
		registerVueComponent(
			'blue-admin-sidebar-button',
			require('./Sidebar/Button/Component.vue').default,
			Vue,
			'blue-admin-vue-components/Sidebar/Button/Component.vue'
		);
		registerVueComponent(
			'blue-admin-sidebar-navigation-link', 
			require('./Sidebar/NavigationLink/Component.vue').default,
			Vue,
			'blue-admin-vue-components/Sidebar/NavigationLink/Component.vue'
		);
		registerVueComponent(
			'blue-admin-sidebar-collapse-navigation-link',
			require('./Sidebar/CollapseNavigationLink/Component.vue').default,
			Vue,
			'blue-admin-vue-components/Sidebar/CollapseNavigationLink/Component.vue'
		);
		registerVueComponent(
			'blue-admin-sidebar-navigation-link-group',
			require('./Sidebar/NavigationLinkGroup/Component.vue').default,
			Vue,
			'blue-admin-vue-components/Sidebar/NavigationLinkGroup/Component.vue'
		);
		
		registerVueComponent(
			'blue-admin-navigation-bar',
			require('./NavigationBar/NavigationBar/Component.vue').default,
			Vue,
			'blue-admin-vue-components/NavigationBar/NavigationBar/Component.vue'
		);
		registerVueComponent(
			'blue-admin-navigation-search',
			require('./NavigationBar/SearchForm/Component.vue').default,
			Vue,
			'blue-admin-vue-components./NavigationBar/SearchForm/Component.vue'
		);
		registerVueComponent(
			'blue-admin-list-dropdown', 
			require('./NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/ListDropdown/Component.vue').default, 
			Vue,
			'blue-admin-vue-components/NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/ListDropdown/Component.vue'
		);
		registerVueComponent(
			'blue-admin-list-dropdown-with-edges',
			require('./NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/ListDropdownWithEdges/Component.vue').default,
			Vue,
			'blue-admin-vue-components/NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/ListDropdownWithEdges/Component.vue'
		);
		registerVueComponent(
			'blue-admin-icon-dropdown-item', 
			require('./NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/Items/ItemWithIcon/Component.vue').default,
			Vue,
			'blue-admin-vue-components/NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/Items/ItemWithIcon/Component.vue'
		);
		registerVueComponent(
			'blue-admin-message-dropdown-item', 
			require('./NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/Items/MessageItem/Component.vue').default, 
			Vue,
			'blue-admin-vue-components/NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/Items/MessageItem/Component.vue'
		);
		registerVueComponent(
			'blue-admin-link-dropdown-item',
			require('./NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/Items/LinkItem/Component.vue').default,
			Vue,
			'blue-admin-vue-components/NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/Items/LinkItem/Component.vue'
		);
		registerVueComponent(
			'blue-admin-search-dropdown-item',
			require('./NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/Items/SearchForm/Component.vue').default,
			Vue,
			'blue-admin-vue-components/NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/Items/SearchForm/Component.vue'
		);
		registerVueComponent(
			'blue-admin-dropdown-navigation-link',
			require('./NavigationBar/NavigationLinks/DropdownNavigationLink/NavigationLink/Component.vue').default,
			Vue,
			'blue-admin-vue-components/NavigationBar/NavigationLinks/DropdownNavigationLink/NavigationLink/Component.vue'
		);
		registerVueComponent(
			'blue-admin-dropdown-image-navigation-link', 
			require('./NavigationBar/NavigationLinks/DropdownNavigationLink/ImageNavigationLink/Component.vue').default,
			Vue,
			'blue-admin-vue-components/NavigationBar/NavigationLinks/DropdownNavigationLink/ImageNavigationLink/Component.vue'
		);
	
		registerVueComponent(
			'blue-admin-table',
			require('./Table/Table/Component.vue').default,
			Vue,
			'blue-admin-vue-components/Table/Table/Component.vue'
		);
		registerVueComponent(
			'blue-admin-table-select',
			require('./Table/Select/Component.vue').default,
			Vue,
			'blue-admin-vue-components/Table/Select/Component.vue'
		);

		registerVueComponent(
			'blue-admin-create-button', 
			require('./Table/CreateButton/Component.vue').default,
			Vue,
			'blue-admin-vue-components/Table/CreateButton/Component.vue'
		);
		registerVueComponent(
			'blue-admin-success-session-message',
			require('./SessionMessages/SuccessMessage/Component.vue').default,
			Vue,
			'blue-admin-vue-components/SessionMessages/SuccessMessage/Component.vue'
		);		
		registerVueComponent(
			'blue-admin-info-session-message', 
			require('./SessionMessages/InfoMessage/Component.vue').default,
			Vue,
			'blue-admin-vue-components/SessionMessages/InfoMessage/Component.vue'
		);		
		registerVueComponent(
			'blue-admin-error-session-message', 
			require('./SessionMessages/ErrorMessage/Component.vue').default, 
			Vue,
			'blue-admin-vue-components/SessionMessages/ErrorMessage/Component.vue'
		);		
		registerVueComponent(
			'blue-admin-warning-session-message',
			require('./SessionMessages/WarningMessage/Component.vue').default, 
			Vue,
			'blue-admin-vue-components/SessionMessages/WarningMessage/Component.vue'
		);
	}
}