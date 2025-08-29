# emergency-services-sample

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

---> getElementbyId returns one element with a specific ID, getElementsByClassName returns a HTML collection within that specific class, querySelector returns the first element that matches a CSS selector (id, class, tag, etc.) and querySelectorAll returns a static NodeList.

2. How do you create and insert a new element into the DOM?
---->   const elementDiv = document.createElement("div");
        elementDiv.innerText = "div toiri hobe";
        elementDiv.classList.add("highlight");
        document.body.appendChild(elementDiv);

3. What is Event Bubbling and how does it work?
----> It is the process in which when an event is triggered, the child element bubbles up and passes the event to it's parent element and then to its parent element.

<!-- how bubbling works  -->
when someone makes an event for example a hover or click, the event happens on that target element first, then the event goes to its parent element one one by one and finally reaches to the root element.


4. What is Event Delegation in JavaScript? Why is it useful?
--------> it is the system of adding a single event listener to the parent element instead of putting event listeners to every child element.

<!-- WHY USEFUL -->
reduces memory usage and improves efficiency, if new childs are added later then we do not need to add new event listenersto them individually every single time, avoids repetitiveness.

5. What is the difference between preventDefault() and stopPropagation() methods?
-----> preventDefault() prevents the default behavior of  a browser but does not interrupt in event bubbling. whereas, stopPropagation() stops the event bubbling so the event will not travel through the dom tree to its target element.