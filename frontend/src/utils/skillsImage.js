import gcp from '../assets/svg/skill/gcp.svg'
import html from '../assets/svg/skill/html.svg'
import photoshop from '../assets/svg/skill/photoshop.svg'
import illustrator from '../assets/svg/skill/illustrator.svg'
import docker from '../assets/svg/skill/docker.svg'
import adobeXd from '../assets/svg/skill/adobe-xd.svg'
import afterEffects from '../assets/svg/skill/after-effects.svg'
import css from '../assets/svg/skill/css.svg'
import angular from '../assets/svg/skill/angular.svg'
import javascript from '../assets/svg/skill/javascript.svg'
import nextJS from '../assets/svg/skill/nextJS.svg'
import nuxtJS from '../assets/svg/skill/nuxtJS.svg'
import react from '../assets/svg/skill/react.svg'
import svelte from '../assets/svg/skill/svelte.svg'
import typescript from '../assets/svg/skill/typescript.svg'
import vue from '../assets/svg/skill/vue.svg'
import bootstrap from '../assets/svg/skill/bootstrap.svg'
import bulma from '../assets/svg/skill/bulma.svg'
import capacitorjs from '../assets/svg/skill/capacitorjs.svg'
import coffeescript from '../assets/svg/skill/coffeescript.svg'
import memsql from '../assets/svg/skill/memsql.svg'
import mongoDB from '../assets/svg/skill/mongoDB.svg'
import mysql from '../assets/svg/skill/mysql.svg'
import postgresql from '../assets/svg/skill/postgresql.svg'
import tailwind from '../assets/svg/skill/tailwind.svg'
import vitejs from '../assets/svg/skill/vitejs.svg'
import vuetifyjs from '../assets/svg/skill/vuetifyjs.svg'
import c from '../assets/svg/skill/c.svg'
import cplusplus from '../assets/svg/skill/cplusplus.svg'
import csharp from '../assets/svg/skill/csharp.svg'
import dart from '../assets/svg/skill/dart.svg'
import go from '../assets/svg/skill/go.svg'
import java from '../assets/svg/skill/java.svg'
import julia from '../assets/svg/skill/julia.svg'
import kotlin from '../assets/svg/skill/kotlin.svg'
import matlab from '../assets/svg/skill/matlab.svg'
import php from '../assets/svg/skill/php.svg'
import python from '../assets/svg/skill/python.svg'
import ruby from '../assets/svg/skill/ruby.svg'
import swift from '../assets/svg/skill/swift.svg'
import adobeaudition from '../assets/svg/skill/adobeaudition.svg'
import aws from '../assets/svg/skill/aws.svg'
import deno from '../assets/svg/skill/deno.svg'
import django from '../assets/svg/skill/django.svg'
import firebase from '../assets/svg/skill/firebase.svg'
import gimp from '../assets/svg/skill/gimp.svg'
import git from '../assets/svg/skill/git.svg'
import graphql from '../assets/svg/skill/graphql.svg'
import lightroom from '../assets/svg/skill/lightroom.svg'
import materialui from '../assets/svg/skill/materialui.svg'
import nginx from '../assets/svg/skill/nginx.svg'
import numpy from '../assets/svg/skill/numpy.svg'
import opencv from '../assets/svg/skill/opencv.svg'
import premierepro from '../assets/svg/skill/premierepro.svg'
import pytorch from '../assets/svg/skill/pytorch.svg'
import selenium from '../assets/svg/skill/selenium.svg'
import strapi from '../assets/svg/skill/strapi.svg'
import tensorflow from '../assets/svg/skill/tensorflow.svg'
import webix from '../assets/svg/skill/webix.svg'
import wordpress from '../assets/svg/skill/wordpress.svg'
// import node from '../assets/svg/skill/Node.png'
import express from '../assets/svg/skill/express.png'

import azure from '../assets/svg/skill/azure.svg'
import blender from '../assets/svg/skill/blender.svg'
import fastify from '../assets/svg/skill/fastify.svg'
import figma from '../assets/svg/skill/figma.svg'
import flutter from '../assets/svg/skill/flutter.svg'
import haxe from '../assets/svg/skill/haxe.svg'
import ionic from '../assets/svg/skill/ionic.svg'
import markdown from '../assets/svg/skill/markdown.svg'
import microsoftoffice from '../assets/svg/skill/microsoftoffice.svg'
import picsart from '../assets/svg/skill/picsart.svg'
import sketch from '../assets/svg/skill/sketch.svg'
import unity from '../assets/svg/skill/unity.svg'
import wolframalpha from '../assets/svg/skill/wolframalpha.svg'

import canva from '../assets/svg/skill/canva.svg'


const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'gcp':
            return gcp;
        case 'html':
            return html;
        case 'photoshop':
            return photoshop;
        case 'docker':
            return docker;
        case 'illustrator':
            return illustrator;
        case 'adobe xd':
            return adobeXd;
        case 'after effects':
            return afterEffects;
        case 'css':
            return css;
        case 'angular':
            return angular;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'nuxt js':
            return nuxtJS;
        case 'react':
            return react;
        case 'svelte':
            return svelte;
        case 'typescript':
            return typescript;
        case 'vue':
            return vue;
        case 'bootstrap':
            return bootstrap;
        case 'bulma':
            return bulma;
        case 'capacitorjs':
            return capacitorjs;
        case 'coffeescript':
            return coffeescript;
        case 'memsql':
            return memsql;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'tailwind':
            return tailwind;
        case 'vitejs':
            return vitejs;
        case 'vuetifyjs':
            return vuetifyjs;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'c#':
            return csharp;
        case 'dart':
            return dart;
        case 'go':
            return go;
        case 'java':
            return java;
        case 'kotlin':
            return kotlin;
        case 'julia':
            return julia;
        case 'matlab':
            return matlab;
        case 'php':
            return php;
        case 'python':
            return python;
        case 'ruby':
            return ruby;
        case 'swift':
            return swift;
        case 'adobe audition':
            return adobeaudition;
        case 'aws':
            return aws;
        case 'deno':
            return deno;
        case 'django':
            return django;
        case 'firebase':
            return firebase;
        case 'gimp':
            return gimp;
        case 'git':
            return git;
        case 'graphql':
            return graphql;
        case 'lightroom':
            return lightroom;
        case 'materialui':
            return materialui;
        case 'nginx':
            return nginx;
        case 'numpy':
            return numpy;
        case 'opencv':
            return opencv;
        case 'premiere pro':
            return premierepro;
        case 'pytorch':
            return pytorch;
        case 'selenium':
            return selenium;
        case 'strapi':
            return strapi;
        case 'tensorflow':
            return tensorflow;
        case 'webix':
            return webix;
        case 'wordpress':
            return wordpress;
        case 'azure':
            return azure;
        case 'blender':
            return blender;
        case 'fastify':
            return fastify;
        case 'figma':
            return figma;
        case 'flutter':
            return flutter;
        case 'haxe':
            return haxe;
        case 'ionic':
            return ionic;
        case 'markdown':
            return markdown;
        case 'microsoft office':
            return microsoftoffice;
        case 'picsart':
            return picsart;
        case 'sketch':
            return sketch;
        case 'unity':
            return unity;
        case 'wolframalpha':
            return wolframalpha;
        case 'canva':
            return canva;
        case 'express':
            return express;
        // case 'node':
        //     return node;
        default:
            break;
    }
}

export default skillsImage;
