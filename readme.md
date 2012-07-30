# Net.io
High performance realtime client/server for browsers and node.js.

## What It Does
Net.io provides a high performance networking system, operating primarily over WebSockets and falling back to
non-WebSocket connections when WebSockets are unavailable. It is designed to be very easy to use and has an API that
is similar to socket.io but with a massively reduced code base.

Net.io has both a server (written for Node.js) and a client that will operate in all browsers and is also compatible
with JavaScript mobile native wrappers like CocoonJS where there is no access to the DOM.

## Why Net.io Instead of Socket.io?
Socket.io is a great library for applications like chat and has built-in support for "channels" etc. Net.io is tailored
more towards realtime gaming and high-performance apps that need to squeeze all the bandwidth out of a connection that
they can. Net.io reduces network overhead by intelligently encoding packets instead of adding to the data that a packet
contains like Socket.io does. The Socket.io client also requires access to the DOM whereas Net.io can run in a non-DOM
environment.

## Who Made Net.io?
Net.io was written by Irrelon Software Limited for use with the Isogenic Game Engine (http://www.isogenicengine.com) and
made open-source so that others can benefit from a high-performance network library designed for realtime gaming.

## License
Net.io is licensed under the MIT License.

## MIT License
Copyright (c) 2012 Irrelon Software Limited

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.