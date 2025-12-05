import ServiceController from './ServiceController'
import Settings from './Settings'
const Controllers = {
    ServiceController: Object.assign(ServiceController, ServiceController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers