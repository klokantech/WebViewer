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

/**
 * Render Object Node. Renders OpenWebGlobe objects, including virtual globe 
 * @author Martin Christen martin.christen@fhnw.ch 
 * @constructor
 */
function RenderObjectNode()
{
      this.cube = null;
      //------------------------------------------------------------------------
      this.OnChangeState = function()
      {
         
      }
     
      //------------------------------------------------------------------------
      this.OnRender = function()
      {
         this.cube.Draw();
      }
      
      //------------------------------------------------------------------------
      this.OnTraverse = function(ts)
      {
         
      }
      
      //------------------------------------------------------------------------
      this.OnInit = function()
      {
            this.cube = new Mesh(this.engine);
            this.cube.SetBufferPC([ -0.5, -0.5,  0.5, 0.0, 0.0, 1.0, 1.0,
                  -0.5,  0.5,  0.5, 0.0, 1.0, 1.0, 1.0,
                   0.5, -0.5,  0.5, 1.0, 0.0, 1.0, 1.0,
                   0.5,  0.5,  0.5, 1.0, 1.0, 1.0, 1.0,
                   0.5, -0.5, -0.5, 1.0, 0.0, 0.0, 1.0,
                   0.5,  0.5, -0.5, 1.0, 1.0, 0.0, 1.0,
                  -0.5, -0.5, -0.5, 0.0, 0.0, 0.0, 1.0,
                  -0.5,  0.5, -0.5, 0.0, 1.0, 0.0, 1.0]);
            this.cube.SetIndexBuffer([3, 1, 0, 5, 3, 2, 7, 5, 4, 1, 7, 6, 5, 7, 1, 2, 0, 6, 2, 3, 0, 4, 5, 2, 6, 7, 4, 0, 1, 6, 3, 5, 1, 4, 2, 6],
                                     "TRIANGLES");

      }
      
      //------------------------------------------------------------------------
      this.OnExit = function()
      {
      
      }
      
      //------------------------------------------------------------------------
      this.OnRegisterEvents = function()
      {
      }
      //------------------------------------------------------------------------
}

RenderObjectNode.prototype = new Node();