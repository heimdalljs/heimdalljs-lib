import Heimdall from '../';
import Session from '../session';
import now from '../../shared/time';
import Node from '../../heimdall-tree/node';
import setupSession from '../setup-session';

setupSession(process);

Heimdall.Node = Node;
Heimdall.now = now;

export default new Heimdall(process._heimdall_session_2);