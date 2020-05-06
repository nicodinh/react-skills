(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1241:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(444);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(1265)],module)}.call(this,__webpack_require__(1242)(module))},1265:function(module,exports,__webpack_require__){var map={"./0-SkillBar.stories.js":1266,"./1-SkillBars.stories.js":1281};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1265},1266:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Playground",(function(){return Playground}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src_lib_components_SkillBar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(141),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(38),addSourceDecorator=(__webpack_require__(186).withSource,__webpack_require__(186).addSource);__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\n\nimport SkillBar from '../src/lib/components/SkillBar';\nimport { withKnobs, text, number, boolean, color as colorComponent, button } from '@storybook/addon-knobs';\n\nexport default {\n  title: 'SkillBar',\n  component: SkillBar,\n  decorators: [withKnobs]\n};\n\nexport const Playground = () => {\n  const name = text('Name', 'Skill Name');\n  const level = number('Level', 100, {\n    range: true,\n    min: 0,\n    max: 100,\n    step: 1,\n  });\n  const color = colorComponent('Color', '#6cc24a');\n  const flat = boolean('Flat',false);\n  const levelProgress = boolean('LevelProgress',false);\n  const duration = number('Duration', 2, {\n    range: true,\n    min: 0,\n    max: 10,\n    step: 1,\n  });\n  const labelWidth = number('LabelWidth', 100, {\n    range: true,\n    min: 0,\n    max: 300,\n    step: 1,\n  });\n  const height = number('Height', 30, {\n    range: true,\n    min: 0,\n    max: 200,\n    step: 1,\n  });\n\n  return(<div style={{fontFamily:'Segoe UI',width:'50%', margin:'auto', marginTop:100}}>\n        <SkillBar\n          name={name}\n          level={level}\n          color={color}\n          flat={flat}\n          levelProgress={levelProgress}\n          duration={duration}\n          labelWidth={labelWidth}\n          height={height}\n        />\n      </div>)\n};\n",locationsMap:{"skillbar--playground":{startLoc:{col:26,line:12},endLoc:{col:1,line:54},startBody:{col:26,line:12},endBody:{col:1,line:54}}}}},title:"SkillBar",component:_src_lib_components_SkillBar__WEBPACK_IMPORTED_MODULE_1__.a,decorators:[_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs]};var Playground=addSourceDecorator((function(){var name=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Name","Skill Name"),level=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("Level",100,{range:!0,min:0,max:100,step:1}),color=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.color)("Color","#6cc24a"),flat=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Flat",!1),levelProgress=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("LevelProgress",!1),duration=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("Duration",2,{range:!0,min:0,max:10,step:1}),labelWidth=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("LabelWidth",100,{range:!0,min:0,max:300,step:1}),height=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("Height",30,{range:!0,min:0,max:200,step:1});return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{fontFamily:"Segoe UI",width:"50%",margin:"auto",marginTop:100}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_lib_components_SkillBar__WEBPACK_IMPORTED_MODULE_1__.a,{name:name,level:level,color:color,flat:flat,levelProgress:levelProgress,duration:duration,labelWidth:labelWidth,height:height}))}),{__STORY__:"import React from 'react';\n\nimport SkillBar from '../src/lib/components/SkillBar';\nimport { withKnobs, text, number, boolean, color as colorComponent, button } from '@storybook/addon-knobs';\n\nexport default {\n  title: 'SkillBar',\n  component: SkillBar,\n  decorators: [withKnobs]\n};\n\nexport const Playground = () => {\n  const name = text('Name', 'Skill Name');\n  const level = number('Level', 100, {\n    range: true,\n    min: 0,\n    max: 100,\n    step: 1,\n  });\n  const color = colorComponent('Color', '#6cc24a');\n  const flat = boolean('Flat',false);\n  const levelProgress = boolean('LevelProgress',false);\n  const duration = number('Duration', 2, {\n    range: true,\n    min: 0,\n    max: 10,\n    step: 1,\n  });\n  const labelWidth = number('LabelWidth', 100, {\n    range: true,\n    min: 0,\n    max: 300,\n    step: 1,\n  });\n  const height = number('Height', 30, {\n    range: true,\n    min: 0,\n    max: 200,\n    step: 1,\n  });\n\n  return(<div style={{fontFamily:'Segoe UI',width:'50%', margin:'auto', marginTop:100}}>\n        <SkillBar\n          name={name}\n          level={level}\n          color={color}\n          flat={flat}\n          levelProgress={levelProgress}\n          duration={duration}\n          labelWidth={labelWidth}\n          height={height}\n        />\n      </div>)\n};\n",__ADDS_MAP__:{"skillbar--playground":{startLoc:{col:26,line:12},endLoc:{col:1,line:54},startBody:{col:26,line:12},endBody:{col:1,line:54}}},__MAIN_FILE_LOCATION__:"/0-SkillBar.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"C:\\Users\\pitik\\Documents\\GitHub\\react-skills\\stories",__IDS_TO_FRAMEWORKS__:{}})},1281:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Playground",(function(){return Playground}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),SkillBar=(__webpack_require__(429),__webpack_require__(9),__webpack_require__(430),__webpack_require__(13),__webpack_require__(141));function SkillBars(props){var skills=props.skills,duration=props.duration,barsHeight=props.barsHeight,spacing=props.spacing,labelsWidth=props.labelsWidth,customLabels=props.customLabels,levelProgress=props.levelProgress,flat=props.flat,styles={root:{margin:5},skill:{marginBottom:spacing}};return react_default.a.createElement("div",{style:styles.root},skills.map((function(skill){return react_default.a.createElement("div",{style:styles.skill,key:skill.name},react_default.a.createElement(SkillBar.a,{flat:flat,levelProgress:levelProgress,duration:duration,customLabel:customLabels?customLabels(skill):null,labelWidth:labelsWidth,height:barsHeight,name:skill.name,level:skill.level,color:skill.color}))})))}SkillBars.displayName="SkillBars",SkillBars.defaultProps={duration:2,levelProgress:!1,flat:!1,barsHeight:30,labelsWidth:100,spacing:15,customLabels:null},SkillBars.__docgenInfo={description:"Group your Skillbars components together",methods:[],displayName:"SkillBars",props:{duration:{defaultValue:{value:"2",computed:!1},type:{name:"number"},required:!1,description:"The animation duration in seconds."},levelProgress:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Whether or not the level text should increment as the bar grow up or directly display the level value."},flat:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Whether the skillbars own a box shadow or not."},barsHeight:{defaultValue:{value:"30",computed:!1},type:{name:"number"},required:!1,description:"The SkillBar component height."},labelsWidth:{defaultValue:{value:"100",computed:!1},type:{name:"number"},required:!1,description:"The SkillBar component label width."},spacing:{defaultValue:{value:"15",computed:!1},type:{name:"number"},required:!1,description:"The spacing between each SkillBar row."},customLabels:{defaultValue:{value:"null",computed:!1},type:{name:"func"},required:!1,description:"User defined function that takes a skill parameter and returns a React component to display instead of the default labels."},skills:{type:{name:"arrayOf",value:{name:"shape",value:{name:{name:"string",required:!0},level:{name:"number",required:!0},color:{name:"string",required:!1}}}},required:!0,description:"An array of SkillBar props data"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\lib\\components\\SkillBars.js"]={name:"SkillBars",docgenInfo:SkillBars.__docgenInfo,path:"src\\lib\\components\\SkillBars.js"});var dist=__webpack_require__(38),addSourceDecorator=(__webpack_require__(186).withSource,__webpack_require__(186).addSource),Playground=(__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\n\nimport SkillBars from '../src/lib/components/SkillBars';\nimport { withKnobs, text, number, boolean, color as colorComponent, object as obj  } from '@storybook/addon-knobs';\n\nexport default {\n  title: 'SkillBars',\n  component: SkillBars,\n  decorators: [withKnobs]\n};\n\nexport const Playground = () => {\n  const flat = boolean('Flat',false);\n  const levelProgress = boolean('LevelProgress',false);\n  const duration = number('Duration', 2, {\n    range: true,\n    min: 0,\n    max: 10,\n    step: 1,\n  });\n  const labelWidth = number('LabelWidth', 100, {\n    range: true,\n    min: 0,\n    max: 300,\n    step: 1,\n  });\n  const height = number('Height', 30, {\n    range: true,\n    min: 0,\n    max: 200,\n    step: 1,\n  });\n  const skills = obj('Skills', [\n    {\n      name: 'ReactJS',\n      level: 90,\n      color: '#00d8ff',\n    },\n    {\n      name: 'ExpressJS',\n      level: 85,\n      color: '#6cc24a',\n    },\n    {\n      name: 'MySQL',\n      level: 80,\n      color: '#00758f',\n    },\n    {\n      name: 'GraphQL',\n      level: 75,\n      color: '#e535ab',\n    },\n    {\n      name: 'Apollo',\n      level: 72,\n      color: '#371777',\n    },\n    {\n      name: 'Prisma',\n      level: 70,\n      color: '#050f2c',\n    },\n  ]);\n\n  return(<div style={{fontFamily:'Segoe UI',width:'50%', margin:'auto', marginTop:100}}>\n        <SkillBars\n          skills={skills}\n          flat={flat}\n          levelProgress={levelProgress}\n          duration={duration}\n          labelsWidth={labelWidth}\n          barsHeight={height}\n        />\n      </div>)\n};\n",locationsMap:{"skillbars--playground":{startLoc:{col:26,line:12},endLoc:{col:1,line:76},startBody:{col:26,line:12},endBody:{col:1,line:76}}}}},title:"SkillBars",component:SkillBars,decorators:[dist.withKnobs]},addSourceDecorator((function(){var flat=Object(dist.boolean)("Flat",!1),levelProgress=Object(dist.boolean)("LevelProgress",!1),duration=Object(dist.number)("Duration",2,{range:!0,min:0,max:10,step:1}),labelWidth=Object(dist.number)("LabelWidth",100,{range:!0,min:0,max:300,step:1}),height=Object(dist.number)("Height",30,{range:!0,min:0,max:200,step:1}),skills=Object(dist.object)("Skills",[{name:"ReactJS",level:90,color:"#00d8ff"},{name:"ExpressJS",level:85,color:"#6cc24a"},{name:"MySQL",level:80,color:"#00758f"},{name:"GraphQL",level:75,color:"#e535ab"},{name:"Apollo",level:72,color:"#371777"},{name:"Prisma",level:70,color:"#050f2c"}]);return react_default.a.createElement("div",{style:{fontFamily:"Segoe UI",width:"50%",margin:"auto",marginTop:100}},react_default.a.createElement(SkillBars,{skills:skills,flat:flat,levelProgress:levelProgress,duration:duration,labelsWidth:labelWidth,barsHeight:height}))}),{__STORY__:"import React from 'react';\n\nimport SkillBars from '../src/lib/components/SkillBars';\nimport { withKnobs, text, number, boolean, color as colorComponent, object as obj  } from '@storybook/addon-knobs';\n\nexport default {\n  title: 'SkillBars',\n  component: SkillBars,\n  decorators: [withKnobs]\n};\n\nexport const Playground = () => {\n  const flat = boolean('Flat',false);\n  const levelProgress = boolean('LevelProgress',false);\n  const duration = number('Duration', 2, {\n    range: true,\n    min: 0,\n    max: 10,\n    step: 1,\n  });\n  const labelWidth = number('LabelWidth', 100, {\n    range: true,\n    min: 0,\n    max: 300,\n    step: 1,\n  });\n  const height = number('Height', 30, {\n    range: true,\n    min: 0,\n    max: 200,\n    step: 1,\n  });\n  const skills = obj('Skills', [\n    {\n      name: 'ReactJS',\n      level: 90,\n      color: '#00d8ff',\n    },\n    {\n      name: 'ExpressJS',\n      level: 85,\n      color: '#6cc24a',\n    },\n    {\n      name: 'MySQL',\n      level: 80,\n      color: '#00758f',\n    },\n    {\n      name: 'GraphQL',\n      level: 75,\n      color: '#e535ab',\n    },\n    {\n      name: 'Apollo',\n      level: 72,\n      color: '#371777',\n    },\n    {\n      name: 'Prisma',\n      level: 70,\n      color: '#050f2c',\n    },\n  ]);\n\n  return(<div style={{fontFamily:'Segoe UI',width:'50%', margin:'auto', marginTop:100}}>\n        <SkillBars\n          skills={skills}\n          flat={flat}\n          levelProgress={levelProgress}\n          duration={duration}\n          labelsWidth={labelWidth}\n          barsHeight={height}\n        />\n      </div>)\n};\n",__ADDS_MAP__:{"skillbars--playground":{startLoc:{col:26,line:12},endLoc:{col:1,line:76},startBody:{col:26,line:12},endBody:{col:1,line:76}}},__MAIN_FILE_LOCATION__:"/1-SkillBars.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"C:\\Users\\pitik\\Documents\\GitHub\\react-skills\\stories",__IDS_TO_FRAMEWORKS__:{}}))},141:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return SkillBar}));__webpack_require__(429),__webpack_require__(430),__webpack_require__(13),__webpack_require__(392);var C_Users_pitik_Documents_GitHub_react_skills_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(280),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);function SkillBar(props){var name=props.name,level=props.level,color=props.color,height=props.height,labelWidth=props.labelWidth,customLabel=props.customLabel,duration=props.duration,levelProgress=props.levelProgress,flat=props.flat,_useState=Object(react__WEBPACK_IMPORTED_MODULE_5__.useState)(!1),_useState2=Object(C_Users_pitik_Documents_GitHub_react_skills_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.a)(_useState,2),ready=_useState2[0],setReady=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_5__.useState)(0),_useState4=Object(C_Users_pitik_Documents_GitHub_react_skills_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.a)(_useState3,2),progress=_useState4[0],setProgress=_useState4[1],styles={root:{display:"flex",borderRadius:3,backgroundColor:"rgba(0,0,0,0)",boxShadow:flat?"none":"3px 3px 5px 0px #252525"},labelContainer:{whiteSpace:"nowrap",textAlign:"center",width:labelWidth,height:height,borderRadius:3,backgroundColor:color,color:"white",lineHeight:"".concat(height,"px"),margin:0,padding:0,fontSize:14},label:{margin:0,color:"white"},barContainer:{flexGrow:1,borderRadius:3,backgroundColor:"white",textAlign:"left"},progressBar:{borderRadius:3,height:height,transition:"width "+duration+"s",width:"".concat(ready?level:0,"%"),backgroundColor:color},level:{fontSize:14,position:"absolute",lineHeight:"".concat(height,"px"),marginLeft:10,color:"white",fontWeight:"bold"}},progressBarRef=Object(react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null),barContainerRef=Object(react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);return Object(react__WEBPACK_IMPORTED_MODULE_5__.useEffect)((function(){var timer;return setReady(!0),progress<level&&(timer=setInterval((function(){var innerWidth=getComputedStyle(progressBarRef.current).width,outerWidth=getComputedStyle(barContainerRef.current).width,lvl=Math.ceil(parseInt(innerWidth.substr(0,innerWidth.length-1),10)/parseInt(outerWidth.substr(0,outerWidth.length-1),10)*100);setProgress(lvl=lvl>level?level:lvl)}),20)),function(){clearInterval(timer)}}),[progress,duration,level]),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{style:styles.root},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{style:styles.labelContainer},customLabel||react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5",{style:styles.label},name)),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{ref:barContainerRef,style:styles.barContainer},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span",{style:styles.level},levelProgress?progress:level,"%"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{ref:progressBarRef,style:styles.progressBar})))}SkillBar.displayName="SkillBar",SkillBar.defaultProps={height:30,duration:2,levelProgress:!1,flat:!1,labelWidth:100,customLabel:null},SkillBar.__docgenInfo={description:"Displays a animated skill bar",methods:[],displayName:"SkillBar",props:{height:{defaultValue:{value:"30",computed:!1},type:{name:"number"},required:!1,description:"The component height."},duration:{defaultValue:{value:"2",computed:!1},type:{name:"number"},required:!1,description:"The animation duration in seconds."},levelProgress:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Whether or not the level text should increment as the bar grows up or directly display the level value."},flat:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Whether the component owns a box shadow or not."},labelWidth:{defaultValue:{value:"100",computed:!1},type:{name:"number"},required:!1,description:"The label width."},customLabel:{defaultValue:{value:"null",computed:!1},type:{name:"func"},required:!1,description:"User defined function that takes a skill parameter and returns a React component to display instead of the default label."},name:{type:{name:"string"},required:!0,description:"The name of the skill."},level:{type:{name:"number"},required:!0,description:"The skill level."},color:{type:{name:"string"},required:!0,description:"The background color."}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\lib\\components\\SkillBar.js"]={name:"SkillBar",docgenInfo:SkillBar.__docgenInfo,path:"src\\lib\\components\\SkillBar.js"})},445:function(module,exports,__webpack_require__){__webpack_require__(446),__webpack_require__(589),__webpack_require__(590),__webpack_require__(1240),module.exports=__webpack_require__(1241)},508:function(module,exports){}},[[445,1,2]]]);
//# sourceMappingURL=main.0b2fdde9d7383321a7e2.bundle.js.map