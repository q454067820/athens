goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45479){
var map__45480 = p__45479;
var map__45480__$1 = (((((!((map__45480 == null))))?(((((map__45480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45480):map__45480);
var m = map__45480__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45480__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45480__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45484_45596 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45485_45597 = null;
var count__45486_45598 = (0);
var i__45487_45599 = (0);
while(true){
if((i__45487_45599 < count__45486_45598)){
var f_45600 = chunk__45485_45597.cljs$core$IIndexed$_nth$arity$2(null,i__45487_45599);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45600], 0));


var G__45601 = seq__45484_45596;
var G__45602 = chunk__45485_45597;
var G__45603 = count__45486_45598;
var G__45604 = (i__45487_45599 + (1));
seq__45484_45596 = G__45601;
chunk__45485_45597 = G__45602;
count__45486_45598 = G__45603;
i__45487_45599 = G__45604;
continue;
} else {
var temp__5735__auto___45605 = cljs.core.seq(seq__45484_45596);
if(temp__5735__auto___45605){
var seq__45484_45606__$1 = temp__5735__auto___45605;
if(cljs.core.chunked_seq_QMARK_(seq__45484_45606__$1)){
var c__4609__auto___45607 = cljs.core.chunk_first(seq__45484_45606__$1);
var G__45608 = cljs.core.chunk_rest(seq__45484_45606__$1);
var G__45609 = c__4609__auto___45607;
var G__45610 = cljs.core.count(c__4609__auto___45607);
var G__45611 = (0);
seq__45484_45596 = G__45608;
chunk__45485_45597 = G__45609;
count__45486_45598 = G__45610;
i__45487_45599 = G__45611;
continue;
} else {
var f_45612 = cljs.core.first(seq__45484_45606__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45612], 0));


var G__45613 = cljs.core.next(seq__45484_45606__$1);
var G__45614 = null;
var G__45615 = (0);
var G__45616 = (0);
seq__45484_45596 = G__45613;
chunk__45485_45597 = G__45614;
count__45486_45598 = G__45615;
i__45487_45599 = G__45616;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45617 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45617], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45617)))?cljs.core.second(arglists_45617):arglists_45617)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45492_45618 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45493_45619 = null;
var count__45494_45620 = (0);
var i__45495_45621 = (0);
while(true){
if((i__45495_45621 < count__45494_45620)){
var vec__45506_45622 = chunk__45493_45619.cljs$core$IIndexed$_nth$arity$2(null,i__45495_45621);
var name_45623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45506_45622,(0),null);
var map__45509_45624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45506_45622,(1),null);
var map__45509_45625__$1 = (((((!((map__45509_45624 == null))))?(((((map__45509_45624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45509_45624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45509_45624):map__45509_45624);
var doc_45626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45509_45625__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45509_45625__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45623], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45627], 0));

if(cljs.core.truth_(doc_45626)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45626], 0));
} else {
}


var G__45628 = seq__45492_45618;
var G__45629 = chunk__45493_45619;
var G__45630 = count__45494_45620;
var G__45631 = (i__45495_45621 + (1));
seq__45492_45618 = G__45628;
chunk__45493_45619 = G__45629;
count__45494_45620 = G__45630;
i__45495_45621 = G__45631;
continue;
} else {
var temp__5735__auto___45632 = cljs.core.seq(seq__45492_45618);
if(temp__5735__auto___45632){
var seq__45492_45633__$1 = temp__5735__auto___45632;
if(cljs.core.chunked_seq_QMARK_(seq__45492_45633__$1)){
var c__4609__auto___45634 = cljs.core.chunk_first(seq__45492_45633__$1);
var G__45635 = cljs.core.chunk_rest(seq__45492_45633__$1);
var G__45636 = c__4609__auto___45634;
var G__45637 = cljs.core.count(c__4609__auto___45634);
var G__45638 = (0);
seq__45492_45618 = G__45635;
chunk__45493_45619 = G__45636;
count__45494_45620 = G__45637;
i__45495_45621 = G__45638;
continue;
} else {
var vec__45511_45639 = cljs.core.first(seq__45492_45633__$1);
var name_45640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45511_45639,(0),null);
var map__45514_45641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45511_45639,(1),null);
var map__45514_45642__$1 = (((((!((map__45514_45641 == null))))?(((((map__45514_45641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45514_45641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45514_45641):map__45514_45641);
var doc_45643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45514_45642__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45514_45642__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45640], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45644], 0));

if(cljs.core.truth_(doc_45643)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45643], 0));
} else {
}


var G__45646 = cljs.core.next(seq__45492_45633__$1);
var G__45647 = null;
var G__45648 = (0);
var G__45649 = (0);
seq__45492_45618 = G__45646;
chunk__45493_45619 = G__45647;
count__45494_45620 = G__45648;
i__45495_45621 = G__45649;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__45516 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45517 = null;
var count__45518 = (0);
var i__45519 = (0);
while(true){
if((i__45519 < count__45518)){
var role = chunk__45517.cljs$core$IIndexed$_nth$arity$2(null,i__45519);
var temp__5735__auto___45650__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45650__$1)){
var spec_45651 = temp__5735__auto___45650__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45651)], 0));
} else {
}


var G__45652 = seq__45516;
var G__45653 = chunk__45517;
var G__45654 = count__45518;
var G__45655 = (i__45519 + (1));
seq__45516 = G__45652;
chunk__45517 = G__45653;
count__45518 = G__45654;
i__45519 = G__45655;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45516);
if(temp__5735__auto____$1){
var seq__45516__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45516__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45516__$1);
var G__45656 = cljs.core.chunk_rest(seq__45516__$1);
var G__45657 = c__4609__auto__;
var G__45658 = cljs.core.count(c__4609__auto__);
var G__45659 = (0);
seq__45516 = G__45656;
chunk__45517 = G__45657;
count__45518 = G__45658;
i__45519 = G__45659;
continue;
} else {
var role = cljs.core.first(seq__45516__$1);
var temp__5735__auto___45660__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45660__$2)){
var spec_45662 = temp__5735__auto___45660__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45662)], 0));
} else {
}


var G__45663 = cljs.core.next(seq__45516__$1);
var G__45664 = null;
var G__45665 = (0);
var G__45666 = (0);
seq__45516 = G__45663;
chunk__45517 = G__45664;
count__45518 = G__45665;
i__45519 = G__45666;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__45667 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45668 = cljs.core.ex_cause(t);
via = G__45667;
t = G__45668;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__45523 = datafied_throwable;
var map__45523__$1 = (((((!((map__45523 == null))))?(((((map__45523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45523):map__45523);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45523__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45523__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45523__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45524 = cljs.core.last(via);
var map__45524__$1 = (((((!((map__45524 == null))))?(((((map__45524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45524):map__45524);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45524__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45524__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45524__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45525 = data;
var map__45525__$1 = (((((!((map__45525 == null))))?(((((map__45525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45525):map__45525);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45525__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45525__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45525__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45526 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45526__$1 = (((((!((map__45526 == null))))?(((((map__45526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45526):map__45526);
var top_data = map__45526__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45526__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45532 = phase;
var G__45532__$1 = (((G__45532 instanceof cljs.core.Keyword))?G__45532.fqn:null);
switch (G__45532__$1) {
case "read-source":
var map__45533 = data;
var map__45533__$1 = (((((!((map__45533 == null))))?(((((map__45533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45533):map__45533);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45533__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45533__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45535 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45535__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45535,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45535);
var G__45535__$2 = (cljs.core.truth_((function (){var fexpr__45536 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45536.cljs$core$IFn$_invoke$arity$1 ? fexpr__45536.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45536.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45535__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45535__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45535__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45535__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45537 = top_data;
var G__45537__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45537,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45537);
var G__45537__$2 = (cljs.core.truth_((function (){var fexpr__45538 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45538.cljs$core$IFn$_invoke$arity$1 ? fexpr__45538.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45538.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45537__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45537__$1);
var G__45537__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45537__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45537__$2);
var G__45537__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45537__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45537__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45537__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45537__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45539 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45539,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45539,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45539,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45539,(3),null);
var G__45542 = top_data;
var G__45542__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45542,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45542);
var G__45542__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45542__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45542__$1);
var G__45542__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45542__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45542__$2);
var G__45542__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45542__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45542__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45542__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45542__$4;
}

break;
case "execution":
var vec__45543 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45543,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45543,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45543,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45543,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45522_SHARP_){
var or__4185__auto__ = (p1__45522_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45547 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45547.cljs$core$IFn$_invoke$arity$1 ? fexpr__45547.cljs$core$IFn$_invoke$arity$1(p1__45522_SHARP_) : fexpr__45547.call(null,p1__45522_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45548 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45548__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45548,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45548);
var G__45548__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45548__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45548__$1);
var G__45548__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45548__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45548__$2);
var G__45548__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45548__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45548__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45548__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45548__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45532__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45551){
var map__45552 = p__45551;
var map__45552__$1 = (((((!((map__45552 == null))))?(((((map__45552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45552):map__45552);
var triage_data = map__45552__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45552__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45552__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45552__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45552__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45552__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45552__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45552__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45552__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__45554 = phase;
var G__45554__$1 = (((G__45554 instanceof cljs.core.Keyword))?G__45554.fqn:null);
switch (G__45554__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45555 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45556 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45557 = loc;
var G__45558 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45559_45680 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45560_45681 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45561_45682 = true;
var _STAR_print_fn_STAR__temp_val__45562_45683 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45561_45682);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45562_45683);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45549_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45549_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45560_45681);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45559_45680);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45555,G__45556,G__45557,G__45558) : format.call(null,G__45555,G__45556,G__45557,G__45558));

break;
case "macroexpansion":
var G__45564 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45565 = cause_type;
var G__45566 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45567 = loc;
var G__45568 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45564,G__45565,G__45566,G__45567,G__45568) : format.call(null,G__45564,G__45565,G__45566,G__45567,G__45568));

break;
case "compile-syntax-check":
var G__45569 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45570 = cause_type;
var G__45571 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45572 = loc;
var G__45573 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45569,G__45570,G__45571,G__45572,G__45573) : format.call(null,G__45569,G__45570,G__45571,G__45572,G__45573));

break;
case "compilation":
var G__45574 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45575 = cause_type;
var G__45576 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45577 = loc;
var G__45578 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45574,G__45575,G__45576,G__45577,G__45578) : format.call(null,G__45574,G__45575,G__45576,G__45577,G__45578));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45579 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45580 = symbol;
var G__45581 = loc;
var G__45582 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45583_45684 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45584_45685 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45585_45686 = true;
var _STAR_print_fn_STAR__temp_val__45586_45687 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45585_45686);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45586_45687);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45550_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45550_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45584_45685);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45583_45684);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45579,G__45580,G__45581,G__45582) : format.call(null,G__45579,G__45580,G__45581,G__45582));
} else {
var G__45587 = "Execution error%s at %s(%s).\n%s\n";
var G__45588 = cause_type;
var G__45589 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45590 = loc;
var G__45591 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45587,G__45588,G__45589,G__45590,G__45591) : format.call(null,G__45587,G__45588,G__45589,G__45590,G__45591));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45554__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
