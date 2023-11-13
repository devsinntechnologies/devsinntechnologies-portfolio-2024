import { React, useState } from 'react'
// import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'
import css from '../../../assets/Home/technologies/css-3-logo.svg'
import html from '../../../assets/Home/technologies/html-5.svg'
import react from '../../../assets/Home/technologies/react.svg'
import node from '../../../assets/Home/technologies/node.svg'
import bootstrap from '../../../assets/Home/technologies/bootstrap.svg'
import vue from '../../../assets/Home/technologies/vue.svg'
import cakephp from '../../../assets/Home/technologies/cakephp.svg'
import php from '../../../assets/Home/technologies/php.webp'
import django from '../../../assets/Home/technologies/django.svg'
import python from '../../../assets/Home/technologies/python.svg'
import express from '../../../assets/Home/technologies/express.svg'
import jquery from '../../../assets/Home/technologies/jquery.svg'
import android from '../../../assets/Home/technologies/android.svg'
import ios from '../../../assets/Home/technologies/ios.svg'
import native from '../../../assets/Home/technologies/react-native.svg'
import flutter from '../../../assets/Home/technologies/flutter.svg'
import xamarin from '../../../assets/Home/technologies/xamarin.svg'
import swift from '../../../assets/Home/technologies/swift.svg'
import rust from '../../../assets/Home/technologies/rust.svg'
import rails from '../../../assets/Home/technologies/rails.svg'
import angular from '../../../assets/Home/technologies/angular.svg'
import java from '../../../assets/Home/technologies/java.svg'
import mysql from '../../../assets/Home/technologies/mysql.svg'
import mongo from '../../../assets/Home/technologies/mongodb.svg'
import firebase from '../../../assets/Home/technologies/firebase.svg'
import oracle from '../../../assets/Home/technologies/oracle.svg'
import mssql from '../../../assets/Home/technologies/microsoft-sql.svg'
import postgresql from '../../../assets/Home/technologies/postgresql.svg'
import azuresql from '../../../assets/Home/technologies/sql-azure.svg'
import googlecloud from '../../../assets/Home/technologies/google-cloud.svg'
import aws from '../../../assets/Home/technologies/aws.svg'
import msazure from '../../../assets/Home/technologies/azure.svg'
import digitalocean from '../../../assets/Home/technologies/digital-ocean.svg'
import mulesoft from '../../../assets/Home/technologies/mulesoft.svg'
import mean from '../../../assets/Home/technologies/mean.svg'
import mern from '../../../assets/Home/technologies/mern.svg'
import lamp from '../../../assets/Home/technologies/lamp.svg'
import golang from '../../../assets/Home/technologies/golang-gopher.svg'
import net from '../../../assets/Home/technologies/dot-net.svg'



import './technology.css'


let barItem = [
    {
        name: 'Frontend',
        class: 'front',
    },
    {
        name: 'Backend',
        class: 'back',
    },
    {
        name: 'Mobile',
        class: 'mobile',
    },
    {
        name: 'DataBase',
        class: 'db',
    },
    {
        name: 'Full Stack',
        class: 'fullstack',
    },
    {
        name: 'Cloud',
        class: 'cloud',
    },
];

let front = [{
    'name': "HTML",
    'img': html,
},
{
    'name': "CSS",
    'img': css,
},
{
    'name': "React",
    'img': react,
},
{
    'name': "Bootstrap",
    'img': bootstrap,
},
{
    'name': "Jquery",
    'img': jquery,
},
{
    'name': "Vue",
    'img': vue,
},
{
    'name': "Angular",
        'img': angular,
},
]
let back = [
    {
        'name': "node",
        'img': node,
    },
    {
        'name': "PHP",
        'img': php,
    },
    {
        'name': "CakePHP",
        'img': cakephp,
    },
    {
        'name': "Python",
        'img': python,
    },
    {
        'name': "Django",
        'img': django,
    },
    {
        'name': "Express",
        'img': express,
    },
    {
        'name': "Rust",
        'img': rust,
    },
    {
        'name': "Rails",
        'img': rails,
    },
]
let mobile = [
    {
        'name': "Android",
        'img': android,
    },
    {
        'name': "IOS",
        'img': ios,
    },
    {
        'name': "React Native",
        'img': native,
    },
    {
        'name': "Flutter",
        'img': flutter,
    },
    {
        'name': "Xamarin",
        'img': xamarin,
    },
    {
        'name': "Swift",
        'img': swift,
    },
    {
        'name': "Java",
        'img': java,
    },
]
let db = [
    {
        'name': "My SQL",
        'img':mysql ,
    },
    {
        'name': "Mongo DB",
        'img': mongo,
    },
    {
        'name': "Firebase",
        'img': firebase,
    },
    {
        'name': "Oracle Database",
        'img': oracle,
    },
    {
        'name': "Postgre SQL",
        'img': postgresql,
    },
    {
        'name': "Microsoft SQL",
        'img': mssql,
    },
    {
        'name': "azure SQL",
        'img': azuresql,
    },
]
let fullstack = [

    {
        'name': "MEAN",
        'img': mean,
    },
    {
        'name': "MERN",
        'img': mern,
    },
    {
        'name': "Python",
        'img': python,
    },
    {
        'name': "Lamp",
        'img': lamp,
    },
    {
        'name': ".NET",
        'img': net,
    },
    {
        'name': "Golang",
        'img': golang,
    },
    {
        'name': "React",
        'img': react,
    },
]
let cloud = [
    {
        'name': " Microsoft Azure",
        'img': msazure ,
    },
    {
        'name': "aws",
        'img': aws,
    },
    {
        'name': "Google Cloud",
        'img': googlecloud,
    },
    {
        'name': "Digital Ocean",
        'img': digitalocean,
    },
    {
        'name': "MuleSoft",
        'img': mulesoft,
    },
]

function Technology() {
    const [activeTab, setActiveTab] = useState("front");

    const changeTab = (className) => {
        setActiveTab(className);
    };

    return (
        <div className="technologies">
            <div className="bar">
                <ul>
                    {barItem.map((item) => (
                        <li key={item.name} onClick={() => { changeTab(item.class) }} className={activeTab === item.class ? 'active' : ''} > {item.name} </li>
                    ))}
                </ul>
            </div>
            <div className={`front ${activeTab === 'front' ? 'open' : ''}`}>
                {front.map((front, index) => {
                    return <div key={index} className="img">
                        <img src={front.img} alt="" />
                        <h2>{front.name}</h2>
                    </div>
                })}
            </div>
            <div className={`back ${activeTab === 'back' ? 'open' : ''}`}>
                {back.map((back, index) => {
                    return <div key={index} className="img">
                        <img src={back.img} alt="" />
                        <h2>{back.name}</h2>
                    </div>
                })}
            </div>
            <div className={`mobile ${activeTab === 'mobile' ? 'open' : ''}`}>
                {mobile.map((mobile, index) => {
                    return <div key={index} className="img">
                        <img src={mobile.img} alt="" />
                        <h2>{mobile.name}</h2>
                    </div>
                })}
            </div>
            <div className={`db ${activeTab === 'db' ? 'open' : ''}`}>
                {db.map((db, index) => {
                    return <div key={index} className="img">
                        <img src={db.img} alt="" />
                        <h2>{db.name}</h2>
                    </div>
                })}
            </div>
            <div className={`fullstack ${activeTab === 'fullstack' ? 'open' : ''}`}>
                {fullstack.map((full, index) => {
                    return <div key={index} className="img">
                        <img src={full.img} alt="" />
                        <h2>{full.name}</h2>
                    </div>
                })}
            </div>
            <div className={`cloud ${activeTab === 'cloud' ? 'open' : ''}`}>
                {cloud.map((cloud, index) => {
                    return <div key={index} className="img">
                        <img src={cloud.img} alt="" />
                        <h2>{cloud.name}</h2>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Technology;
