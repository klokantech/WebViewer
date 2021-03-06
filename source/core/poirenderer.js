/*******************************************************************************
#      ____               __          __  _      _____ _       _               #
#     / __ \              \ \        / / | |    / ____| |     | |              #
#    | |  | |_ __   ___ _ __ \  /\  / /__| |__ | |  __| | ___ | |__   ___      #
#    | |  | | '_ \ / _ \ '_ \ \/  \/ / _ \ '_ \| | |_ | |/ _ \| '_ \ / _ \     #
#    | |__| | |_) |  __/ | | \  /\  /  __/ |_) | |__| | | (_) | |_) |  __/     #
#     \____/| .__/ \___|_| |_|\/  \/ \___|_.__/ \_____|_|\___/|_.__/ \___|     #
#           | |                                                                #
#           |_|                 _____ _____  _  __                             #
#                              / ____|  __ \| |/ /                             #
#                             | (___ | |  | | ' /                              #
#                              \___ \| |  | |  <                               #
#                              ____) | |__| | . \                              #
#                             |_____/|_____/|_|\_\                             #
#                                                                              #
#                              (c) 2010-2011 by                                #
#           University of Applied Sciences Northwestern Switzerland            #
#                     Institute of Geomatics Engineering                       #
#                           martin.christen@fhnw.ch                            #
********************************************************************************
*     Licensed under MIT License. Read the file LICENSE for more information   *
*******************************************************************************/

goog.provide('owg.PoiRenderer');

//------------------------------------------------------------------------------
/** 
 * @class PoiRenderer
 * @constructor
 * 
 * @author Martin Christen martin.christen@fhnw.ch
 * 
 * @param {engine3d} engine
 */
function PoiRenderer(engine)
{
   /** @type {engine3d} */
   this.engine = engine;
   
   /** @type {Array.<Poi>} */
   this.poiarray = [];
}

//------------------------------------------------------------------------------
/**
 * @description Render visible Poi
 * @param {vec3} vCameraPosition
 * @param {mat4} matModelViewProjection
 */
PoiRenderer.prototype.Render = function(vCameraPosition, matModelViewProjection)
{
   // todo: frustum culling etc.
   for (var i=0;i<this.poiarray.length;i++)
   {
      var poi = this.poiarray[i];
      if(!poi.hide)
      {
         var x = vCameraPosition.Get()[0]; //ToDo: Expensive implementation !
         var y = vCameraPosition.Get()[1];
         var z = vCameraPosition.Get()[2];
         var dis = Math.sqrt(Math.pow(poi.posX-x,2)+ Math.pow(poi.posY-y,2) + Math.pow(poi.posZ-z,2));
         var disLimit = poi.visibilityDistance; 
         if(disLimit>dis)
         {
            poi.Draw();
         }
      }
      
   }
   
}

//------------------------------------------------------------------------------
/**
 * @description add poi to scene
 * @param {Poi} poi
 */
PoiRenderer.prototype.AddPoi = function(poi)
{
   this.poiarray.push(poi);
}
//------------------------------------------------------------------------------
/**
 * @description remove poi from scene
 * @param {Poi} poi
 */
PoiRenderer.prototype.RemovePoi = function(poi)
{
   for (var i=0;i<this.poiarray.length;i++)
   {
      if (this.poiarray[i] == poi)
      {
         this.poiarray.splice(i, 1);
         return;
      }
   }
}
//------------------------------------------------------------------------------
/**
 * @description returns the picked Poi id.
 * @param {number} mx mouse x coordinate
 * @param {number} my mouse y coordinate
 * @returns {?Poi}
 */
PoiRenderer.prototype.PickPOI = function(mx,my)
{
   for (var i=0;i<this.poiarray.length;i++)
   {
      if(this.poiarray[i].Pick(mx,my))
      {
       return this.poiarray[i];  
      }
      
   }
   
   return null;
}


