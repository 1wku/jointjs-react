import { useIsomorphicLayoutEffect } from "usehooks-ts"
import * as joint from "jointjs"
import { useRef } from "react";

function JointJs() {

  const graph = new joint.dia.Graph({}, { cellNamespace: joint.shapes });
  const el = useRef(null)


  useIsomorphicLayoutEffect(() => {
    paper = new joint.dia.Paper({
      el: el,
      model: graph,
      width: "100%",
      height: 600,
      gridSize: 1,
      background: {
        color: "#f0f0f0"
      },
      linkPinning: false,
      // //defaultLink: new joint.shapes.standard.Link(),
      // defaultLink: function(cellView, magnet) {
      //   const link = new joint.shapes.standard.Link();
      //   /*
      //           var targetArrowheadTool = new joint.linkTools.TargetArrowhead();
      //           var toolsView = new joint.dia.ToolsView({
      //               tools: [
      //                   targetArrowheadTool
      //               ]
      //           });
      //           //var linkView = link.findView(paper);
      //           
      //           cellView.addTools(toolsView);
      //           */
      //   return link;
      // },
      // Validate link connections.  When a link is being formed, we can examine the links and shut it down
      // if there is anything we don't like about it.
      //      validateConnection: function(
      //        cellViewS,
      //        magnetS,
      //        cellViewT,
      //        magnetT,
      //        end,
      //        linkView
      //      ) {
      //        if (cellViewS === cellViewT) return false; // Don't allow a link to start and end at the same element.
      //        if (
      //          magnetT === undefined ||
      //          magnetT.getAttribute("port-group") !== "in"
      //        )
      //          return false; // If there is no target or the target is not an "in" port group, cancel it
      //        if (!magnetS.getAttribute("port-group").startsWith("out")) return false; // If the source port group doesn't start with "out" then cancel it.
      //        // We need to check that the source doesn't ALREADY have a link in the graph!
      //        /*
      //                console.log("Source:");
      //                console.dir(cellViewS);
      //                console.log("magnetS");
      //                console.dir(magnetS)
      //                console.log('linkView');
      //                console.dir(linkView)
      //                console.dir(linkView.model.source())
      //                */
      //        const source = linkView.model.source();
      //        // Cound the number of outgoing links.  Hint ... it will be at least 1 as we have the CURRENT link
      //        if (
      //          JointJSUtils.countOutgoingLinks(this.model, source.id, source.port) >
      //          1
      //        ) {
      //          return false;
      //        }
      //        return true;
      //      },
      //      interactive: function(cellView) {
      //        if (cellView.model.get("locked")) {
      //          return {
      //            elementMove: false
      //          };
      //        }
      //
      //        // otherwise
      //        return true;
      //      }
    });
  }, [])

  return (
    <div>
      <h1>JointJs</h1>
    </div>
  )
}

export default JointJs
