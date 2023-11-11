import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import MarketPlace from '../components/MarketPlace.vue'
import BlogApp from '../components/BlogApp.vue'
import BuilderApp from '../components/BuilderApp.vue'
import ContactApp from '../components/ContactApp.vue'
import DaoApp from '../components/DaoApp.vue'
import DocsApp from '../components/DocsApp.vue'
import EventsApp from '../components/EventsApp.vue'
import ToolsApp from '../components/ToolsApp.vue'
import PrivacyPolicyVue from '../components/PrivacyPolicy.vue'
import TermofUseVue from '../components/TermofUse.vue'
import ContentPolicy from '../components/ContentPolicy.vue'
import CollectiblesApp from '../components/CollectiblesApp.vue'
import CodeofEthics from '../components/CodeofEthics.vue'
import PlatformApp from '../components/PlatformApp.vue'
import ProjectUpdates from '../components/ProjectUpdates.vue'
import TechnologyApp from '../components/TechnologyApp.vue'
import TutorialsApp from '../components/TutorialsApp.vue'
import OverviewApp from '../components/OverviewApp.vue' 
import BuilderOverviewVue from '../components/BuilderOverview.vue'
import BuilderScenesVue from '../components/BuilderScenes.vue'
import SignInVue from '../components/SignIn.vue'
import PlacesAppVue from '../components/PlacesApp.vue'
import AllArticlesVue from '../components/AllArticles.vue'
import AboutDecentraland from '../components/AboutDecentraland.vue'
import AnonsApp from '../components/AnonsApp.vue'
import CommunityHighlights from '../components/CommunityHighlights.vue'
import BuildCollections from '../components/BuildCollections.vue'
import SignUp from '../components/SignUp.vue'
import HesapKurtarmaVue from '../components/HesapKurtarma.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path:'/marketplace',
    name:'marketplace',
    component: MarketPlace
  },
  {
    path:'/blogapp',
    name:'blogapp',
    component: BlogApp,
  },
  {
    path:'/allarticles',
    name:'allarticles',
    component:AllArticlesVue
  },
  {
    path:'/aboutdecentraland',
    name:'aboutdecentraland',
    component:AboutDecentraland
  },
  {
    path:'/anonsapp',
    name:'anonsapp',
    component:AnonsApp
  },
  {
    path:'/communityhighlights',
    name:'communityhighlights',
    component: CommunityHighlights
  },
  {
    path:'/platformapp',
    name:'platformapp',
    component: PlatformApp
  },
  {
    path:'/builderapp',
    name:'builderapp',
    component:BuilderApp,
  },
  {
    path:'/builderscenes',
    name:'builderscenes',
    component: BuilderScenesVue
  },
  {
    path:'/builderoverview',
    name:'builderoverview',
    component: BuilderOverviewVue
  },
  {
    path:'/buildercollections',
    name:'buildercollections',
    component: BuildCollections
  },
  {
    path:'/contactapp',
    name:'contactapp',
    component:ContactApp
  },
  {
    path:'/daoapp',
    name:'daoapp',
    component:DaoApp
  },
  {
    path:'/docsapp',
    name:'docsapp',
    component:DocsApp
  },
  {
    path:'/eventsapp',
    name:'eventsapp',
    component:EventsApp
  },
  {
    path:'/placesapp',
    name:'placesapp',
    component: PlacesAppVue
  },
  {
    path:'/toolsapp',
    name:'toolsapp',
    component:ToolsApp
  },
  {
    path:'/privacy',
    name:'privacypolicy',
    component: PrivacyPolicyVue
  },
  {
    path:'/termofuse',
    name:'termofuse',
    component: TermofUseVue
  },
  {
    path:'/contentpolicy',
    name:'contentpolicy',
    component: ContentPolicy
  },
  {
    path:'/collectibles',
    name:'collectibles',
    component: CollectiblesApp
  },
  {
    path:'/codeofethics',
    name:'codeofethics',
    component: CodeofEthics
  },
  {
    path:'/platform',
    name:'platform',
    component: PlatformApp
  },
  {
    path:'/projectupdate',
    name:'projectupdate',
    component: ProjectUpdates
  },
  {
    path:'/technology',
    name:'technology',
    component: TechnologyApp
  },
  {
    path:'/tutorials',
    name:'tutorials',
    component: TutorialsApp
  },
  {
    path:'/overview',
    name:'overview',
    component: OverviewApp
  },
  {
    path:'/signIn',
    name:'SignIn',
    component:SignInVue
  },
  {
    path:'/signUp',
    name:'SignUp',
    component: SignUp
  },
  {
    path:'/hesapkurtarma',
    name:'HesapKurtarma',
    component: HesapKurtarmaVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
