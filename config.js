// config.js
const SUPABASE_URL = "https://tlwxoifwjbjebetonlgb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsd3hvaWZ3amJqZWJldG9ubGdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg1MDAyOTUsImV4cCI6MjEwNDA3NjI5NX0.iZRENiJByVri8g1cJi84PS9s7h8fxZWKa_qbolJeK6U";

window.addEventListener('DOMContentLoaded', () => {
    if (typeof window.supabase !== 'undefined') {
        window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    } else {
        console.error("Supabase Library failed to load!");
    }
});

// Helper to check if the current user is an Admin
async function isAdmin() {
    const { data: { user } } = await window.supabaseClient.auth.getUser();
    if (!user) return false;
    
    const { data: profile } = await window.supabaseClient
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();
        
    return profile?.role === 'admin';
}

// Helper to get the current logged-in user's profile
async function getCurrentUserProfile() {
    const { data: { user } } = await window.supabaseClient.auth.getUser();
    if (!user) return null;
    

async function getCurrentUserProfile() {
    const { data: { user } } = await window.supabaseClient.auth.getUser();
    if (!user) return null;

    const { data: profile } = await window.supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
 HEAD
        
    return profile;
}
    return profile;
}

async function requireLogin() {
    const { data: { user } } = await window.supabaseClient.auth.getUser();
    if (!user) {
        window.location.href = 'index.html';
        return null;
    }
    return user;
}
/* ============================================================
   CCS ORGHUB — SUPABASE CONFIG
   ============================================================ */

window.SUPABASE_URL = "https://tlwxoifwjbjebetonlgb.supabase.co";
window.SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsd3hvaWZ3amJqZWJldG9ubGdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg1MDAyOTUsImV4cCI6MjEwNDA3NjI5NX0.iZRENiJByVri8g1cJi84PS9s7h8fxZWKa_qbolJeK6U";

/* ---------- HELPERS ---------- */
async function isAdmin() {
  if (!window.supabaseClient) return false;
  const { data: { user } } = await window.supabaseClient.auth.getUser();
  if (!user) return false;
  const { data: profile } = await window.supabaseClient
    .from('profiles').select('role').eq('id', user.id).single();
  return profile?.role === 'admin';
}

async function getCurrentUserProfile() {
  if (!window.supabaseClient) return null;
  const { data: { user } } = await window.supabaseClient.auth.getUser();
  if (!user) return null;
  const { data: profile } = await window.supabaseClient
    .from('profiles').select('*').eq('id', user.id).single();
  return profile;
}