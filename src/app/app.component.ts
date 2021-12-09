import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sidebar;
  @ViewChildren(CdkDrag) draggables: QueryList<CdkDrag>;

  ngAfterViewInit() {
    const arr = this.draggables.toArray();
    this.sidebar = [arr[0], arr[1]];
  }

  drop(event: CdkDragDrop<any[]>) {
    const nodeToMove = event.item.element.nativeElement;
    const { previousContainer, container, previousIndex, currentIndex } = event;

    console.log(this.sidebar);

    if (previousContainer === container) {
      moveItemInArray(container.data, previousIndex, currentIndex);

      moveWithinContainer(
        container.element.nativeElement,
        previousIndex,
        currentIndex
      );
    } else {
      transferArrayItem(
        previousContainer.data,
        container.data,
        previousIndex,
        currentIndex
      );
      transferNodeToContainer(
        nodeToMove,
        container.element.nativeElement,
        currentIndex
      );

      Promise.resolve().then(() => {
        previousContainer.removeItem(event.item);
        event.item.dropContainer = container;
        event.item._dragRef._withDropContainer(container._dropListRef);
        container.addItem(event.item);
      });
    }
  }


}

function moveWithinContainer(container, fromIndex, toIndex) {
  if (fromIndex === toIndex) {
    return;
  }

  const nodeToMove = container.children[fromIndex];
  const targetNode = container.children[toIndex];

  if (fromIndex < toIndex) {
    targetNode.parentNode.insertBefore(nodeToMove, targetNode.nextSibling);
  } else {
    targetNode.parentNode.insertBefore(nodeToMove, targetNode);
  }
}

function transferNodeToContainer(node, container, toIndex) {
  if (toIndex === container.children.length) {
    container.appendChild(node);
  } else {
    const targetItem = container.children[toIndex];
    targetItem.parentNode.insertBefore(node, targetItem);
  }
}
